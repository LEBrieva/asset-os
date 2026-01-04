import { Injectable, Logger } from '@nestjs/common';
import { PortfolioService } from '../portfolio/portfolio.service';
import { SnapshotsService } from '../snapshots/snapshots.service';

@Injectable()
export class CommandsService {
  private readonly logger = new Logger(CommandsService.name);

  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly snapshotsService: SnapshotsService,
  ) {}

  /**
   * Process a command message
   */
  async processCommand(command: string, args: string[]): Promise<string> {
    this.logger.log(`Processing command: ${command} with args: ${args}`);

    switch (command) {
      case '/total':
        return this.handleTotal();

      case '/status':
        return this.handleStatus();

      case '/alloc':
        return this.handleAllocation(args[0]);

      case '/help':
        return this.handleHelp();

      default:
        return `Unknown command: ${command}. Type /help for available commands.`;
    }
  }

  /**
   * /total - Portfolio summary
   */
  private async handleTotal(): Promise<string> {
    const summary = await this.portfolioService.getSummary();

    if (summary.snapshotStatus === 'NOT_FOUND') {
      return 'No snapshot available for today. Run a sync first.';
    }

    const changeSign = (summary.changeVsYesterdayUsd || 0) >= 0 ? '+' : '';
    const changePct = ((summary.changeVsYesterdayPct || 0) * 100).toFixed(2);

    let message = `*Portfolio Summary*\n\n`;
    message += `Total: $${summary.totalUsd.toLocaleString()}\n`;
    message += `Change (24h): ${changeSign}$${(summary.changeVsYesterdayUsd || 0).toLocaleString()} (${changeSign}${changePct}%)\n\n`;

    message += `*By Provider:*\n`;
    for (const prov of summary.byProvider) {
      message += `${prov.provider}: $${(prov.usd as number).toLocaleString()}\n`;
    }

    message += `\nStatus: ${summary.snapshotStatus}`;

    return message;
  }

  /**
   * /status - System status
   */
  private async handleStatus(): Promise<string> {
    const summary = await this.portfolioService.getSummary();

    let message = `*System Status*\n\n`;
    message += `Snapshot Status: ${summary.snapshotStatus}\n`;
    message += `Last Update: ${summary.date.toLocaleString()}\n\n`;

    message += `*Providers:*\n`;
    for (const prov of summary.byProvider) {
      message += `${prov.provider}: ✅ OK\n`;
    }

    return message;
  }

  /**
   * /alloc [asset|provider] - Allocation breakdown
   */
  private async handleAllocation(groupBy?: string): Promise<string> {
    const groupByParam = groupBy === 'provider' ? 'provider' : 'asset';
    const allocation = await this.portfolioService.getAllocation(
      undefined,
      groupByParam,
    );

    if (allocation.items.length === 0) {
      return 'No allocation data available.';
    }

    let message = `*Allocation by ${groupByParam}*\n\n`;

    for (const item of allocation.items.slice(0, 10)) {
      const pct = (item.pct * 100).toFixed(2);
      message += `${item.key}: $${item.usd.toLocaleString()} (${pct}%)\n`;
    }

    if (allocation.items.length > 10) {
      message += `\n...and ${allocation.items.length - 10} more`;
    }

    return message;
  }

  /**
   * /help - Show available commands
   */
  private handleHelp(): Promise<string> {
    const help = `*Available Commands:*\n\n`;
    return Promise.resolve(
      help +
        `/total - Portfolio summary\n` +
        `/status - System status\n` +
        `/alloc [asset|provider] - Allocation breakdown\n` +
        `/help - Show this message\n\n` +
        `You can also ask questions in natural language!`,
    );
  }
}
