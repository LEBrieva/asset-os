import { Controller, Get, Query } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get('summary')
  async getSummary(@Query('date') dateStr?: string) {
    const date = dateStr ? new Date(dateStr) : undefined;
    return this.portfolioService.getSummary(date);
  }

  @Get('allocation')
  async getAllocation(
    @Query('date') dateStr?: string,
    @Query('groupBy') groupBy?: 'asset' | 'provider',
  ) {
    const date = dateStr ? new Date(dateStr) : undefined;
    return this.portfolioService.getAllocation(date, groupBy || 'asset');
  }
}
