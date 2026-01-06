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

      case '/change':
        return this.handleChange();

      case '/history':
        return this.handleHistory(args[0]);

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
   * /change - Portfolio change (yesterday vs today)
   */
  private async handleChange(): Promise<string> {
    const change = await this.portfolioService.getPortfolioChange();

    const changeSign = change.changeUsd >= 0 ? '+' : '';
    const changePct = (change.changePct * 100).toFixed(2);

    let message = `*Portfolio Change*\n\n`;
    message += `From: ${change.fromDate.toLocaleDateString()}\n`;
    message += `To: ${change.toDate.toLocaleDateString()}\n\n`;
    message += `Previous: $${change.fromTotalUsd.toLocaleString()}\n`;
    message += `Current: $${change.toTotalUsd.toLocaleString()}\n`;
    message += `Change: ${changeSign}$${change.changeUsd.toLocaleString()} (${changeSign}${changePct}%)\n\n`;

    if (change.topChanges.length > 0) {
      message += `*Top Changes:*\n`;
      for (const item of change.topChanges) {
        const itemSign = item.changeUsd >= 0 ? '+' : '';
        message += `${item.asset}: ${itemSign}$${item.changeUsd.toLocaleString()}\n`;
      }
    }

    return message;
  }

  /**
   * /history <asset> - Asset history (yesterday vs today)
   */
  private async handleHistory(asset?: string): Promise<string> {
    if (!asset) {
      return 'Please specify an asset. Example: /history BTC';
    }

    const history = await this.portfolioService.getAssetHistory(asset);

    const amountChangeSign = history.amount.change >= 0 ? '+' : '';
    const amountChangePct = (history.amount.changePct * 100).toFixed(2);
    const usdChangeSign = history.usdValue.change >= 0 ? '+' : '';
    const priceChangeSign = history.price.change >= 0 ? '+' : '';
    const priceChangePct = (history.price.changePct * 100).toFixed(2);

    let message = `*${history.asset} History*\n\n`;
    message += `From: ${history.fromDate.toLocaleDateString()}\n`;
    message += `To: ${history.toDate.toLocaleDateString()}\n\n`;

    message += `*Token Amount:*\n`;
    message += `Previous: ${history.amount.from.toLocaleString()}\n`;
    message += `Current: ${history.amount.to.toLocaleString()}\n`;
    message += `Change: ${amountChangeSign}${history.amount.change.toLocaleString()} (${amountChangeSign}${amountChangePct}%)\n\n`;

    message += `*USD Value:*\n`;
    message += `Previous: $${history.usdValue.from.toLocaleString()}\n`;
    message += `Current: $${history.usdValue.to.toLocaleString()}\n`;
    message += `Change: ${usdChangeSign}$${history.usdValue.change.toLocaleString()}\n\n`;

    message += `*Price per Token:*\n`;
    message += `Previous: $${history.price.from.toLocaleString()}\n`;
    message += `Current: $${history.price.to.toLocaleString()}\n`;
    message += `Change: ${priceChangeSign}$${history.price.change.toLocaleString()} (${priceChangeSign}${priceChangePct}%)`;

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
        `/change - Portfolio change (yesterday vs today)\n` +
        `/history <asset> - Asset history (e.g., /history BTC)\n` +
        `/help - Show this message\n\n` +
        `You can also ask questions in natural language!`,
    );
  }
}
