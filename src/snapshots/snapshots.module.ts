import { Module } from '@nestjs/common';
import { SnapshotsService } from './snapshots.service';
import { IntegrationsModule } from '../integrations/integrations.module';
import { PricingModule } from '../pricing/pricing.module';

@Module({
  imports: [IntegrationsModule, PricingModule],
  providers: [SnapshotsService],
  exports: [SnapshotsService],
})
export class SnapshotsModule {}
