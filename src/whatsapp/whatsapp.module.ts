import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WhatsAppService } from './whatsapp.service';
import { CommandsService } from './commands.service';
import { AiOrchestratorService } from './ai-orchestrator.service';
import { WhatsAppGatewayService } from './whatsapp-gateway.service';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { SnapshotsModule } from '../snapshots/snapshots.module';

@Module({
  imports: [ConfigModule, PortfolioModule, SnapshotsModule],
  providers: [
    WhatsAppService,
    CommandsService,
    AiOrchestratorService,
    WhatsAppGatewayService,
  ],
  exports: [WhatsAppGatewayService],
})
export class WhatsAppModule {}
