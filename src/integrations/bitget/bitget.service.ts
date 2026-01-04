import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { createHmac } from 'crypto';
import { firstValueFrom } from 'rxjs';
import {
  Provider,
  ProviderBalanceResponse,
  AssetBalance,
} from '../../common/types/providers';

@Injectable()
export class BitgetService {
  private readonly logger = new Logger(BitgetService.name);
  private readonly baseUrl = 'https://api.bitget.com';
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly passphrase: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.apiKey = this.configService.get<string>('BITGET_API_KEY') || '';
    this.apiSecret = this.configService.get<string>('BITGET_API_SECRET') || '';
    this.passphrase = this.configService.get<string>('BITGET_API_PASSPHRASE') || '';
  }

  /**
   * Fetch ALL account balances from Bitget (Spot + Earn + Futures)
   * Read-only operation
   */
  async getBalances(): Promise<ProviderBalanceResponse> {
    try {
      this.logger.log('Fetching balances from Bitget (Spot + Earn + Futures)...');

      // Fetch from all 3 wallets in parallel
      const [spotBalances, earnBalances, futuresBalances] = await Promise.all([
        this.getSpotBalances(),
        this.getEarnBalances(),
        this.getFuturesBalances(),
      ]);

      // Merge all balances
      const allBalances = this.mergeBalances([
        ...spotBalances,
        ...earnBalances,
        ...futuresBalances,
      ]);

      this.logger.log(
        `Fetched ${allBalances.length} assets from Bitget (Spot: ${spotBalances.length}, Earn: ${earnBalances.length}, Futures: ${futuresBalances.length})`,
      );

      return {
        provider: Provider.BITGET,
        balances: allBalances,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error('Failed to fetch Bitget balances', error.stack);
      throw error;
    }
  }

  /**
   * Fetch Spot wallet balances
   */
  private async getSpotBalances(): Promise<AssetBalance[]> {
    const path = '/api/v2/spot/account/assets';
    const response = await this.makeRequest(path);

    const balances: AssetBalance[] = response.data.map((item: any) => ({
      asset: item.coin,
      free: item.available,
      locked: item.frozen || '0',
    }));

    return balances.filter(
      (b) => parseFloat(b.free) > 0 || parseFloat(b.locked) > 0,
    );
  }

  /**
   * Fetch Earn wallet balances
   */
  private async getEarnBalances(): Promise<AssetBalance[]> {
    try {
      const path = '/api/v2/earn/account/assets';
      this.logger.debug(`Fetching Earn balances from: ${path}`);
      const response = await this.makeRequest(path);

      this.logger.debug(
        `Earn API response: ${JSON.stringify(response.data).substring(0, 500)}`,
      );

      const balances: AssetBalance[] = response.data.map((item: any) => ({
        asset: item.coin,
        free: item.amount || item.available || item.balance || '0',
        locked: '0',
      }));

      return balances.filter((b) => parseFloat(b.free) > 0);
    } catch (error) {
      this.logger.error(
        `Failed to fetch Earn balances: ${error.message}`,
        error.stack,
      );
      return [];
    }
  }

  /**
   * Fetch Futures wallet balances
   */
  private async getFuturesBalances(): Promise<AssetBalance[]> {
    try {
      const path = '/api/v2/mix/account/accounts?productType=USDT-FUTURES';
      this.logger.debug(`Fetching Futures balances from: ${path}`);
      const response = await this.makeRequest(path);

      this.logger.debug(
        `Futures API response: ${JSON.stringify(response.data).substring(0, 500)}`,
      );

      const balances: AssetBalance[] = response.data.map((item: any) => ({
        asset: item.marginCoin,
        free: item.available || '0',
        locked: item.locked || '0',
      }));

      return balances.filter(
        (b) => parseFloat(b.free) > 0 || parseFloat(b.locked) > 0,
      );
    } catch (error) {
      this.logger.error(
        `Failed to fetch Futures balances: ${error.message}`,
        error.stack,
      );
      return [];
    }
  }

  /**
   * Make authenticated request to Bitget API
   */
  private async makeRequest(path: string): Promise<any> {
    const timestamp = Date.now().toString();
    const method = 'GET';

    // Bitget signature: timestamp + method + path + body
    const signString = timestamp + method + path;
    const signature = createHmac('sha256', this.apiSecret)
      .update(signString)
      .digest('base64');

    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}${path}`, {
        headers: {
          'ACCESS-KEY': this.apiKey,
          'ACCESS-SIGN': signature,
          'ACCESS-TIMESTAMP': timestamp,
          'ACCESS-PASSPHRASE': this.passphrase,
          'Content-Type': 'application/json',
        },
      }),
    );

    if (response.data.code !== '00000') {
      throw new Error(`Bitget API error: ${response.data.msg}`);
    }

    return response.data;
  }

  /**
   * Merge balances from multiple sources, summing same assets
   */
  private mergeBalances(balances: AssetBalance[]): AssetBalance[] {
    const merged = new Map<string, AssetBalance>();

    for (const balance of balances) {
      const existing = merged.get(balance.asset);

      if (existing) {
        // Sum balances
        existing.free = (
          parseFloat(existing.free) + parseFloat(balance.free)
        ).toString();
        existing.locked = (
          parseFloat(existing.locked) + parseFloat(balance.locked)
        ).toString();
      } else {
        merged.set(balance.asset, { ...balance });
      }
    }

    return Array.from(merged.values()).filter(
      (b) => parseFloat(b.free) > 0 || parseFloat(b.locked) > 0,
    );
  }

  /**
   * Test connection to Bitget API
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.getBalances();
      return true;
    } catch (error) {
      this.logger.error('Bitget connection test failed', error.stack);
      return false;
    }
  }
}
