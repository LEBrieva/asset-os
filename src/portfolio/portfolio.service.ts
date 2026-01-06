import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PricingService } from '../pricing/pricing.service';

@Injectable()
export class PortfolioService {
  private readonly logger = new Logger(PortfolioService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly pricingService: PricingService,
  ) {}

  /**
   * Get portfolio summary for a specific date
   */
  async getSummary(date?: Date) {
    const queryDate = date || new Date();
    queryDate.setHours(0, 0, 0, 0);

    const snapshot = await this.prisma.snapshot.findUnique({
      where: { snapshotDate: queryDate },
      include: {
        balances: {
          include: {
            account: true,
          },
        },
      },
    });

    if (!snapshot) {
      return {
        date: queryDate,
        totalUsd: 0,
        byProvider: [],
        snapshotStatus: 'NOT_FOUND',
      };
    }

    // Calculate USD values if not cached
    await this.calculateUsdValues(snapshot.id);

    // Re-fetch with updated USD values
    const updatedSnapshot = await this.prisma.snapshot.findUnique({
      where: { id: snapshot.id },
      include: {
        balances: {
          include: {
            account: true,
          },
        },
      },
    });

    // Group by provider
    const byProvider = {};
    let totalUsd = 0;

    for (const balance of updatedSnapshot?.balances || []) {
      const provider = balance.account.provider;
      const usdValue = balance.usdValue
        ? parseFloat(balance.usdValue.toString())
        : 0;

      if (!byProvider[provider]) {
        byProvider[provider] = 0;
      }

      byProvider[provider] += usdValue;
      totalUsd += usdValue;
    }

    const byProviderArray = Object.entries(byProvider).map(
      ([provider, usd]) => ({
        provider,
        usd,
      }),
    );

    // Get yesterday's snapshot for comparison
    const yesterday = new Date(queryDate);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdaySnapshot = await this.prisma.snapshot.findUnique({
      where: { snapshotDate: yesterday },
      include: { balances: true },
    });

    let changeVsYesterdayUsd = 0;
    let changeVsYesterdayPct = 0;

    if (yesterdaySnapshot) {
      const yesterdayTotal = yesterdaySnapshot.balances.reduce(
        (sum, b) => sum + (b.usdValue ? parseFloat(b.usdValue.toString()) : 0),
        0,
      );

      changeVsYesterdayUsd = totalUsd - yesterdayTotal;
      changeVsYesterdayPct =
        yesterdayTotal > 0 ? changeVsYesterdayUsd / yesterdayTotal : 0;
    }

    return {
      date: queryDate,
      totalUsd: parseFloat(totalUsd.toFixed(2)),
      byProvider: byProviderArray,
      changeVsYesterdayUsd: parseFloat(changeVsYesterdayUsd.toFixed(2)),
      changeVsYesterdayPct: parseFloat(changeVsYesterdayPct.toFixed(4)),
      snapshotStatus: snapshot.status,
    };
  }

  /**
   * Get allocation breakdown
   */
  async getAllocation(date?: Date, groupBy: 'asset' | 'provider' = 'asset') {
    const queryDate = date || new Date();
    queryDate.setHours(0, 0, 0, 0);

    const snapshot = await this.prisma.snapshot.findUnique({
      where: { snapshotDate: queryDate },
      include: {
        balances: {
          include: {
            account: true,
          },
        },
      },
    });

    if (!snapshot) {
      return {
        date: queryDate,
        groupBy,
        items: [],
      };
    }

    await this.calculateUsdValues(snapshot.id);

    const updatedSnapshot = await this.prisma.snapshot.findUnique({
      where: { id: snapshot.id },
      include: {
        balances: {
          include: {
            account: true,
          },
        },
      },
    });

    const grouped = {};
    let total = 0;

    for (const balance of updatedSnapshot?.balances || []) {
      const key = groupBy === 'asset' ? balance.asset : balance.account.provider;
      const usdValue = balance.usdValue
        ? parseFloat(balance.usdValue.toString())
        : 0;

      if (!grouped[key]) {
        grouped[key] = 0;
      }

      grouped[key] += usdValue;
      total += usdValue;
    }

    const items = Object.entries(grouped)
      .map(([key, usd]) => ({
        key,
        usd: parseFloat((usd as number).toFixed(2)),
        pct: total > 0 ? parseFloat(((usd as number) / total).toFixed(4)) : 0,
      }))
      .sort((a, b) => b.usd - a.usd);

    return {
      date: queryDate,
      groupBy,
      items,
    };
  }

  /**
   * Get holdings for a specific asset
   */
  async getAssetHoldings(asset: string, date?: Date) {
    const queryDate = date || new Date();
    queryDate.setHours(0, 0, 0, 0);

    const snapshot = await this.prisma.snapshot.findUnique({
      where: { snapshotDate: queryDate },
      include: {
        balances: {
          where: { asset: asset.toUpperCase() },
          include: { account: true },
        },
      },
    });

    if (!snapshot || snapshot.balances.length === 0) {
      return {
        asset: asset.toUpperCase(),
        found: false,
        totalAmount: 0,
        totalUsd: 0,
        pricePerToken: 0,
        holdings: [],
      };
    }

    await this.calculateUsdValues(snapshot.id);

    // Re-fetch with updated USD values
    const updatedSnapshot = await this.prisma.snapshot.findUnique({
      where: { id: snapshot.id },
      include: {
        balances: {
          where: { asset: asset.toUpperCase() },
          include: { account: true },
        },
      },
    });

    let totalAmount = 0;
    let totalUsd = 0;
    const holdings = [];

    for (const balance of updatedSnapshot?.balances || []) {
      const amount =
        parseFloat(balance.free.toString()) +
        parseFloat(balance.locked.toString());
      const usdValue = balance.usdValue
        ? parseFloat(balance.usdValue.toString())
        : 0;

      totalAmount += amount;
      totalUsd += usdValue;

      holdings.push({
        provider: balance.account.provider,
        amount: parseFloat(amount.toFixed(8)),
        usdValue: parseFloat(usdValue.toFixed(2)),
      });
    }

    const pricePerToken = totalAmount > 0 ? totalUsd / totalAmount : 0;

    return {
      asset: asset.toUpperCase(),
      found: true,
      totalAmount: parseFloat(totalAmount.toFixed(8)),
      totalUsd: parseFloat(totalUsd.toFixed(2)),
      pricePerToken: parseFloat(pricePerToken.toFixed(2)),
      holdings,
    };
  }

  /**
   * Calculate and update USD values for all balances in a snapshot
   */
  private async calculateUsdValues(snapshotId: string) {
    const balances = await this.prisma.accountBalance.findMany({
      where: { snapshotId },
    });

    // Get unique assets
    const assets = [...new Set(balances.map((b) => b.asset))];

    // Fetch prices
    const prices = await this.pricingService.getPrices(assets);

    // Update USD values
    for (const balance of balances) {
      const price = prices[balance.asset];
      if (price !== null) {
        const totalAmount =
          parseFloat(balance.free.toString()) +
          parseFloat(balance.locked.toString());
        const usdValue = totalAmount * price;

        await this.prisma.accountBalance.update({
          where: {
            snapshotId_accountId_asset: {
              snapshotId: balance.snapshotId,
              accountId: balance.accountId,
              asset: balance.asset,
            },
          },
          data: {
            usdValue: parseFloat(usdValue.toFixed(2)),
          },
        });
      }
    }
  }
}
