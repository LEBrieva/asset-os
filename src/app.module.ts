import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { SnapshotsModule } from './snapshots/snapshots.module';
import { PricingModule } from './pricing/pricing.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AdminModule } from './admin/admin.module';
import { WhatsAppModule } from './whatsapp/whatsapp.module';
import { SchedulerService } from './scheduler/scheduler.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    IntegrationsModule,
    SnapshotsModule,
    PricingModule,
    PortfolioModule,
    AdminModule,
    WhatsAppModule,
  ],
  controllers: [AppController],
  providers: [AppService, SchedulerService],
})
export class AppModule {}
