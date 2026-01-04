import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PricingService } from './pricing.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
    }),
  ],
  providers: [PricingService],
  exports: [PricingService],
})
export class PricingModule {}
