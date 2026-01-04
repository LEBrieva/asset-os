import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { WhatsAppService } from './whatsapp.service';
import { CommandsService } from './commands.service';
import { AiOrchestratorService } from './ai-orchestrator.service';

@Injectable()
export class WhatsAppGatewayService implements OnModuleInit {
  private readonly logger = new Logger(WhatsAppGatewayService.name);

  constructor(
    private readonly whatsappService: WhatsAppService,
    private readonly commandsService: CommandsService,
    private readonly aiOrchestrator: AiOrchestratorService,
  ) {}

  onModuleInit() {
    this.logger.log('Initializing WhatsApp Gateway...');
    try {
      this.whatsappService.onMessage(this.handleMessage.bind(this));
    } catch (error) {
      this.logger.warn('WhatsApp Gateway not ready yet, will retry...');
    }
  }

  /**
   * Main message handler - routes to commands or AI
   */
  private async handleMessage(from: string, message: string) {
    this.logger.log(`Handling message from ${from}: ${message}`);

    let response: string;

    // Check if it's a command (starts with /)
    if (message.trim().startsWith('/')) {
      const parts = message.trim().split(' ');
      const command = parts[0];
      const args = parts.slice(1);

      response = await this.commandsService.processCommand(command, args);
    } else {
      // Natural language query - use AI
      response = await this.aiOrchestrator.processQuery(message);
    }

    // Send response
    await this.whatsappService.sendMessage(from, response);
  }

  /**
   * Send a notification (for alerts, daily brief, etc.)
   */
  async sendNotification(to: string, message: string) {
    await this.whatsappService.sendMessage(to, message);
  }
}
