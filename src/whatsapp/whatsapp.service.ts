import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandsService } from './commands.service';
import { AiOrchestratorService } from './ai-orchestrator.service';

@Injectable()
export class WhatsAppService {
  private readonly logger = new Logger(WhatsAppService.name);
  private readonly whatsappToken: string;
  private readonly phoneNumberId: string;
  private readonly verifyToken: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly commandsService: CommandsService,
    private readonly aiOrchestrator: AiOrchestratorService,
  ) {
    // Meta WhatsApp Business API credentials
    this.whatsappToken = this.configService.get<string>('WHATSAPP_TOKEN');
    this.phoneNumberId = this.configService.get<string>('WHATSAPP_PHONE_NUMBER_ID');
    this.verifyToken = this.configService.get<string>('WHATSAPP_VERIFY_TOKEN');

    this.logger.log('WhatsApp Service initialized with Meta Business API');
  }

  /**
   * Handle incoming message from webhook
   */
  async handleIncomingMessage(message: any, value: any) {
    const from = message.from;
    const messageBody = message.text?.body;
    const messageId = message.id;

    this.logger.log(`Message from ${from}: ${messageBody}`);

    // Only process text messages
    if (!messageBody) {
      this.logger.log('Ignoring non-text message');
      return;
    }

    try {
      let response: string;

      // Check if it's a command (starts with /)
      if (messageBody.trim().startsWith('/')) {
        const parts = messageBody.trim().split(' ');
        const command = parts[0];
        const args = parts.slice(1);

        response = await this.commandsService.processCommand(command, args);
      } else {
        // Natural language query - use AI
        response = await this.aiOrchestrator.processQuery(messageBody);
      }

      // Send response via WhatsApp
      await this.sendMessage(from, response);
    } catch (error) {
      this.logger.error(`Error handling message: ${error.message}`);
      await this.sendMessage(
        from,
        'Lo siento, hubo un error procesando tu mensaje. Por favor intenta de nuevo.',
      );
    }
  }

  /**
   * Send a WhatsApp message using Meta Graph API
   */
  async sendMessage(to: string, text: string): Promise<void> {
    const url = `https://graph.facebook.com/v18.0/${this.phoneNumberId}/messages`;

    const payload = {
      messaging_product: 'whatsapp',
      to: to,
      type: 'text',
      text: { body: text },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.whatsappToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`WhatsApp API error: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      this.logger.log(`Message sent successfully: ${JSON.stringify(data)}`);
    } catch (error) {
      this.logger.error(`Error sending WhatsApp message: ${error.message}`);
      throw error;
    }
  }

  /**
   * Send a notification (for alerts, daily brief, etc.)
   */
  async sendNotification(to: string, message: string) {
    await this.sendMessage(to, message);
  }
}
