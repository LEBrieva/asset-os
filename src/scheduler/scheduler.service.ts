import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { SnapshotsService } from '../snapshots/snapshots.service';
import { Provider } from '@prisma/client';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  constructor(private readonly snapshotsService: SnapshotsService) {}

  /**
   * Daily snapshot at 7:00 AM (America/Sao_Paulo timezone)
   * Cron: 0 7 * * * = every day at 7:00
   */
  @Cron('0 7 * * *', {
    name: 'daily-snapshot',
    timeZone: 'America/Sao_Paulo',
  })
  async handleDailySnapshot() {
    this.logger.log('Starting daily snapshot...');

    try {
      const result = await this.snapshotsService.runSync(undefined, [
        Provider.BITGET,
        // Provider.SIMPLEFX,  // Add when implemented
        // Provider.NEXO,      // Manual CSV import
      ]);

      this.logger.log(
        `Daily snapshot completed: ${result.snapshotId} - Status: ${result.status}`,
      );
    } catch (error) {
      this.logger.error('Daily snapshot failed:', error.stack);
    }
  }

  /**
   * Optional: Health check every 30 minutes
   */
  @Cron(CronExpression.EVERY_30_MINUTES, {
    name: 'health-check',
  })
  async handleHealthCheck() {
    this.logger.debug('Health check: OK');
  }
}
