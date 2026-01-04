import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma/prisma.service';
import { firstValueFrom } from 'rxjs';

// Mapping common assets to CoinGecko IDs
const ASSET_TO_COINGECKO_ID: Record<string, string> = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  USDT: 'tether',
  USDC: 'usd-coin',
  BNB: 'binancecoin',
  XRP: 'ripple',
  ADA: 'cardano',
  SOL: 'solana',
  DOT: 'polkadot',
  DOGE: 'dogecoin',
  MATIC: 'matic-network',
  AVAX: 'avalanche-2',
  LINK: 'chainlink',
  UNI: 'uniswap',
  ATOM: 'cosmos',
};

@Injectable()
export class PricingService {
  private readonly logger = new Logger(PricingService.name);
  private readonly coinGeckoBaseUrl = 'https://api.coingecko.com/api/v3';
  private readonly bitgetBaseUrl = 'https://api.bitget.com';

  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Get current USD price for an asset
   * Uses cache from DB if available (today), otherwise fetches from CoinGecko
   */
  async getPrice(asset: string): Promise<number | null> {
    // USD and stablecoins = 1
    if (['USD', 'USDT', 'USDC', 'BUSD', 'DAI'].includes(asset.toUpperCase())) {
      return 1;
    }

    // Check cache first
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const cached = await this.prisma.priceDaily.findUnique({
      where: {
        priceDate_assetOrSymbol: {
          priceDate: today,
          assetOrSymbol: asset.toUpperCase(),
        },
      },
    });

    if (cached) {
      return parseFloat(cached.priceUsd.toString());
    }

    // Fetch from CoinGecko
    return this.fetchAndCachePrice(asset);
  }

  /**
   * Fetch price from Bitget or CoinGecko and cache it
   */
  private async fetchAndCachePrice(asset: string): Promise<number | null> {
    // Try Bitget first
    let priceUsd = await this.fetchFromBitget(asset);
    let source = 'BITGET';

    // Fallback to CoinGecko
    if (!priceUsd) {
      priceUsd = await this.fetchFromCoinGecko(asset);
      source = 'COINGECKO';
    }

    if (!priceUsd) {
      this.logger.warn(`No price data found for ${asset}`);
      return null;
    }

    // Cache it
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await this.prisma.priceDaily.upsert({
      where: {
        priceDate_assetOrSymbol: {
          priceDate: today,
          assetOrSymbol: asset.toUpperCase(),
        },
      },
      create: {
        priceDate: today,
        assetOrSymbol: asset.toUpperCase(),
        priceUsd: priceUsd,
        source,
      },
      update: {
        priceUsd: priceUsd,
        source,
      },
    });

    this.logger.log(`Cached price for ${asset}: $${priceUsd} (${source})`);
    return priceUsd;
  }

  /**
   * Fetch price from Bitget public API
   */
  private async fetchFromBitget(asset: string): Promise<number | null> {
    try {
      const symbol = `${asset.toUpperCase()}USDT`;
      const url = `${this.bitgetBaseUrl}/api/v2/spot/market/tickers?symbol=${symbol}`;
      const response = await firstValueFrom(this.httpService.get(url));

      if (response.data.code !== '00000') {
        return null;
      }

      const ticker = response.data.data?.[0];
      if (!ticker || !ticker.lastPr) {
        return null;
      }

      return parseFloat(ticker.lastPr);
    } catch (error) {
      this.logger.debug(
        `Bitget fetch failed for ${asset}: ${error.message}`,
      );
      return null;
    }
  }

  /**
   * Fetch price from CoinGecko
   */
  private async fetchFromCoinGecko(asset: string): Promise<number | null> {
    try {
      const coinId = ASSET_TO_COINGECKO_ID[asset.toUpperCase()];
      if (!coinId) {
        return null;
      }

      const url = `${this.coinGeckoBaseUrl}/simple/price?ids=${coinId}&vs_currencies=usd`;
      const response = await firstValueFrom(this.httpService.get(url));

      const priceUsd = response.data[coinId]?.usd;
      return priceUsd || null;
    } catch (error) {
      this.logger.debug(
        `CoinGecko fetch failed for ${asset}: ${error.message}`,
      );
      return null;
    }
  }

  /**
   * Fetch multiple prices at once (batch)
   */
  async getPrices(assets: string[]): Promise<Record<string, number | null>> {
    const prices: Record<string, number | null> = {};

    for (const asset of assets) {
      prices[asset] = await this.getPrice(asset);
    }

    return prices;
  }

  /**
   * Pre-fetch and cache prices for common assets
   */
  async warmCache() {
    this.logger.log('Warming price cache...');
    const commonAssets = Object.keys(ASSET_TO_COINGECKO_ID);

    for (const asset of commonAssets) {
      await this.getPrice(asset);
      // Rate limit: CoinGecko free tier allows ~10-50 calls/min
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    this.logger.log('Price cache warmed');
  }
}
