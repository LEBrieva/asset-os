import { Controller, Get, Post, Body, Query, HttpCode, Logger } from '@nestjs/common';
import { WhatsAppService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsAppController {
  private readonly logger = new Logger(WhatsAppController.name);

  constructor(private readonly whatsAppService: WhatsAppService) {}

  /**
   * Webhook verification endpoint (GET)
   * Meta enviará una petición GET para verificar el webhook
   */
  @Get('webhook')
  verifyWebhook(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
  ) {
    this.logger.log(`Webhook verification request: mode=${mode}, token=${token}`);

    const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

    if (mode === 'subscribe' && token === verifyToken) {
      this.logger.log('Webhook verified successfully');
      return challenge;
    } else {
      this.logger.error('Webhook verification failed');
      return 'Verification failed';
    }
  }

  /**
   * Webhook endpoint (POST)
   * Meta enviará mensajes entrantes de WhatsApp aquí
   */
  @Post('webhook')
  @HttpCode(200)
  async handleWebhook(@Body() body: any) {
    this.logger.log(`Incoming webhook: ${JSON.stringify(body)}`);

    try {
      // Verificar que sea una notificación de WhatsApp
      if (body.object === 'whatsapp_business_account') {
        // Procesar cada entrada
        for (const entry of body.entry || []) {
          for (const change of entry.changes || []) {
            if (change.field === 'messages') {
              const value = change.value;

              // Procesar mensajes
              if (value.messages) {
                for (const message of value.messages) {
                  await this.whatsAppService.handleIncomingMessage(message, value);
                }
              }
            }
          }
        }
      }

      return { status: 'ok' };
    } catch (error) {
      this.logger.error(`Error processing webhook: ${error.message}`);
      return { status: 'error', message: error.message };
    }
  }
}
