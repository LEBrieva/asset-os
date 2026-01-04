import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { SnapshotsModule } from '../snapshots/snapshots.module';

@Module({
  imports: [SnapshotsModule],
  controllers: [AdminController],
})
export class AdminModule {}
