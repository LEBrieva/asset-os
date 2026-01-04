import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BitgetService } from '../integrations/bitget/bitget.service';
import { SimpleFxService } from '../integrations/simplefx/simplefx.service';
import { NexoService } from '../integrations/nexo/nexo.service';
import { PricingService } from '../pricing/pricing.service';
import {
  Provider,
  SnapshotSource,
  SnapshotStatus,
  SyncRunStatus,
} from '@prisma/client';

@Injectable()
export class SnapshotsService {
  private readonly logger = new Logger(SnapshotsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly bitgetService: BitgetService,
    private readonly simpleFxService: SimpleFxService,
    private readonly nexoService: NexoService,
    private readonly pricingService: PricingService,
  ) {}

  /**
   * Create or get today's snapshot
   */
  async getOrCreateTodaySnapshot(source: SnapshotSource = SnapshotSource.DAILY_CRON) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let snapshot = await this.prisma.snapshot.findUnique({
      where: { snapshotDate: today },
    });

    if (!snapshot) {
      this.logger.log(`Creating snapshot for ${today.toISOString().split('T')[0]}`);
      snapshot = await this.prisma.snapshot.create({
        data: {
          snapshotDate: today,
          source,
          status: SnapshotStatus.CREATED,
        },
      });
    }

    return snapshot;
  }

  /**
   * Run sync for all providers
   */
  async runSync(snapshotDate?: Date, providers?: Provider[]) {
    const snapshot = snapshotDate
      ? await this.getOrCreateSnapshotForDate(snapshotDate)
      : await this.getOrCreateTodaySnapshot(SnapshotSource.MANUAL);

    this.logger.log(`Starting sync for snapshot ${snapshot.id}`);

    // Update status to RUNNING
    await this.prisma.snapshot.update({
      where: { id: snapshot.id },
      data: { status: SnapshotStatus.RUNNING },
    });

    const providersToSync = providers || [Provider.BITGET, Provider.SIMPLEFX];
    const results = await Promise.allSettled(
      providersToSync.map((provider) =>
        this.syncProvider(snapshot.id, provider),
      ),
    );

    // Determine final status
    const allOk = results.every((r) => r.status === 'fulfilled');
    const anyOk = results.some((r) => r.status === 'fulfilled');

    const finalStatus = allOk
      ? SnapshotStatus.COMPLETE
      : anyOk
        ? SnapshotStatus.PARTIAL
        : SnapshotStatus.FAILED;

    await this.prisma.snapshot.update({
      where: { id: snapshot.id },
      data: { status: finalStatus },
    });

    this.logger.log(`Sync completed with status: ${finalStatus}`);

    return { snapshotId: snapshot.id, status: finalStatus };
  }

  /**
   * Sync a single provider
   */
  private async syncProvider(snapshotId: string, provider: Provider) {
    const startedAt = new Date();

    try {
      this.logger.log(`Syncing ${provider}...`);

      // Get or create account for provider
      const account = await this.getOrCreateAccount(provider);

      // Fetch balances based on provider
      let balances;
      if (provider === Provider.BITGET) {
        const response = await this.bitgetService.getBalances();
        balances = response.balances;
      } else if (provider === Provider.SIMPLEFX) {
        const response = await this.simpleFxService.getBalances();
        balances = response.balances;
      } else {
        throw new Error(`Provider ${provider} not implemented yet`);
      }

      // Save balances
      await this.saveBalances(snapshotId, account.id, balances);

      // Record successful sync
      await this.prisma.providerSyncRun.upsert({
        where: {
          snapshotId_provider: {
            snapshotId,
            provider,
          },
        },
        create: {
          snapshotId,
          provider,
          startedAt,
          finishedAt: new Date(),
          status: SyncRunStatus.OK,
        },
        update: {
          finishedAt: new Date(),
          status: SyncRunStatus.OK,
          errorMessage: null,
        },
      });

      this.logger.log(`${provider} sync completed successfully`);
    } catch (error) {
      this.logger.error(`${provider} sync failed:`, error.stack);

      await this.prisma.providerSyncRun.upsert({
        where: {
          snapshotId_provider: {
            snapshotId,
            provider,
          },
        },
        create: {
          snapshotId,
          provider,
          startedAt,
          finishedAt: new Date(),
          status: SyncRunStatus.ERROR,
          errorMessage: error.message,
        },
        update: {
          finishedAt: new Date(),
          status: SyncRunStatus.ERROR,
          errorMessage: error.message,
        },
      });

      throw error;
    }
  }

  /**
   * Get or create account for a provider
   */
  private async getOrCreateAccount(provider: Provider) {
    const existing = await this.prisma.account.findFirst({
      where: { provider },
    });

    if (existing) return existing;

    return this.prisma.account.create({
      data: {
        provider,
        label: `${provider} Account`,
        baseCurrency: 'USD',
      },
    });
  }

  /**
   * Save balances for an account
   */
  private async saveBalances(
    snapshotId: string,
    accountId: string,
    balances: Array<{ asset: string; free: string; locked: string }>,
  ) {
    // Get unique asset symbols
    const assets = [...new Set(balances.map((b) => b.asset))];

    // Fetch prices for all assets
    const pricesRecord = await this.pricingService.getPrices(assets);
    const prices = new Map(Object.entries(pricesRecord));

    for (const balance of balances) {
      const free = parseFloat(balance.free);
      const locked = parseFloat(balance.locked);
      const totalAmount = free + locked;

      // Calculate USD value
      const priceUSD = prices.get(balance.asset) || 0;
      const usdValue = totalAmount * priceUSD;

      await this.prisma.accountBalance.upsert({
        where: {
          snapshotId_accountId_asset: {
            snapshotId,
            accountId,
            asset: balance.asset,
          },
        },
        create: {
          snapshotId,
          accountId,
          asset: balance.asset,
          free,
          locked,
          usdValue,
        },
        update: {
          free,
          locked,
          usdValue,
        },
      });
    }

    this.logger.log(`Saved ${balances.length} balances for account ${accountId}`);
  }

  /**
   * Get or create snapshot for specific date
   */
  private async getOrCreateSnapshotForDate(date: Date) {
    const snapshotDate = new Date(date);
    snapshotDate.setHours(0, 0, 0, 0);

    let snapshot = await this.prisma.snapshot.findUnique({
      where: { snapshotDate },
    });

    if (!snapshot) {
      snapshot = await this.prisma.snapshot.create({
        data: {
          snapshotDate,
          source: SnapshotSource.MANUAL,
          status: SnapshotStatus.CREATED,
        },
      });
    }

    return snapshot;
  }

  /**
   * Get snapshot status with provider details
   */
  async getSnapshotStatus(snapshotId: string) {
    const snapshot = await this.prisma.snapshot.findUnique({
      where: { id: snapshotId },
      include: {
        providerSyncRuns: true,
      },
    });

    if (!snapshot) {
      throw new Error('Snapshot not found');
    }

    return {
      snapshotId: snapshot.id,
      snapshotDate: snapshot.snapshotDate,
      status: snapshot.status,
      providers: snapshot.providerSyncRuns.map((run) => ({
        provider: run.provider,
        status: run.status,
        error: run.errorMessage,
      })),
    };
  }

  /**
   * Upload Nexo CSV and create snapshot
   */
  async uploadNexoCSV(csvBuffer: Buffer, snapshotDate?: Date) {
    const snapshot = snapshotDate
      ? await this.getOrCreateSnapshotForDate(snapshotDate)
      : await this.getOrCreateTodaySnapshot(SnapshotSource.CSV_IMPORT);

    this.logger.log(`Uploading Nexo CSV for snapshot ${snapshot.id}`);

    const startedAt = new Date();

    try {
      // Parse CSV and get balances
      const response = await this.nexoService.parseCSVAndGetBalances(
        csvBuffer,
      );

      // Get or create Nexo account
      const account = await this.getOrCreateAccount(Provider.NEXO);

      // Save balances
      await this.saveBalances(snapshot.id, account.id, response.balances);

      // Record successful sync
      await this.prisma.providerSyncRun.upsert({
        where: {
          snapshotId_provider: {
            snapshotId: snapshot.id,
            provider: Provider.NEXO,
          },
        },
        create: {
          snapshotId: snapshot.id,
          provider: Provider.NEXO,
          startedAt,
          finishedAt: new Date(),
          status: SyncRunStatus.OK,
        },
        update: {
          finishedAt: new Date(),
          status: SyncRunStatus.OK,
          errorMessage: null,
        },
      });

      // Update snapshot status
      await this.prisma.snapshot.update({
        where: { id: snapshot.id },
        data: { status: SnapshotStatus.COMPLETE },
      });

      this.logger.log(
        `Nexo CSV uploaded successfully for snapshot ${snapshot.id}`,
      );

      return {
        snapshotId: snapshot.id,
        assetsImported: response.balances.length,
      };
    } catch (error) {
      this.logger.error(`Nexo CSV upload failed: ${error.message}`);

      // Record failed sync
      await this.prisma.providerSyncRun.upsert({
        where: {
          snapshotId_provider: {
            snapshotId: snapshot.id,
            provider: Provider.NEXO,
          },
        },
        create: {
          snapshotId: snapshot.id,
          provider: Provider.NEXO,
          startedAt,
          finishedAt: new Date(),
          status: SyncRunStatus.ERROR,
          errorMessage: error.message,
        },
        update: {
          finishedAt: new Date(),
          status: SyncRunStatus.ERROR,
          errorMessage: error.message,
        },
      });

      // Update snapshot status
      await this.prisma.snapshot.update({
        where: { id: snapshot.id },
        data: { status: SnapshotStatus.FAILED },
      });

      throw error;
    }
  }
}
