import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WhatsAppService } from './whatsapp.service';
import { WhatsAppController } from './whatsapp.controller';
import { CommandsService } from './commands.service';
import { AiOrchestratorService } from './ai-orchestrator.service';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { SnapshotsModule } from '../snapshots/snapshots.module';

@Module({
  imports: [ConfigModule, PortfolioModule, SnapshotsModule],
  controllers: [WhatsAppController],
  providers: [
    WhatsAppService,
    CommandsService,
    AiOrchestratorService,
  ],
  exports: [WhatsAppService],
})
export class WhatsAppModule {}
