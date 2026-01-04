import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
  WASocket,
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import * as qrcode from 'qrcode-terminal';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class WhatsAppService implements OnModuleInit {
  private readonly logger = new Logger(WhatsAppService.name);
  private sock: WASocket;
  private authorizedNumbers: string[];
  private readonly authPath: string;

  constructor(private readonly configService: ConfigService) {
    this.authorizedNumbers =
      this.configService
        .get<string>('WHATSAPP_AUTHORIZED_NUMBERS')
        ?.split(',') || [];
    this.authPath = path.join(process.cwd(), 'whatsapp-session');
  }

  async onModuleInit() {
    // Connect in background to not block app startup
    this.connect().catch((err) => {
      this.logger.error('Failed to initialize WhatsApp:', err);
    });
  }

  async connect() {
    try {
      // Ensure auth directory exists
      if (!fs.existsSync(this.authPath)) {
        fs.mkdirSync(this.authPath, { recursive: true });
      }

      const { state, saveCreds } = await useMultiFileAuthState(this.authPath);

      this.sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
      });

      // QR code event
      this.sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
          this.logger.log('Scan this QR code with WhatsApp:');
          qrcode.generate(qr, { small: true });
        }

        if (connection === 'close') {
          const shouldReconnect =
            (lastDisconnect?.error as Boom)?.output?.statusCode !==
            DisconnectReason.loggedOut;

          this.logger.log('Connection closed. Reconnecting:', shouldReconnect);

          if (shouldReconnect) {
            await this.connect();
          }
        } else if (connection === 'open') {
          this.logger.log('WhatsApp connected successfully!');
        }
      });

      // Save credentials on update
      this.sock.ev.on('creds.update', saveCreds);
    } catch (error) {
      this.logger.error('Failed to connect to WhatsApp:', error);
    }
  }

  /**
   * Send a text message to a WhatsApp number
   */
  async sendMessage(to: string, message: string) {
    try {
      // Format number: remove + and @s.whatsapp.net if present
      const jid = to.replace('+', '').replace('@s.whatsapp.net', '') + '@s.whatsapp.net';

      await this.sock.sendMessage(jid, { text: message });
      this.logger.log(`Message sent to ${to}`);
    } catch (error) {
      this.logger.error(`Failed to send message to ${to}:`, error);
      throw error;
    }
  }

  /**
   * Check if a number is authorized
   */
  isAuthorized(number: string): boolean {
    const normalized = number.replace(/\D/g, '');
    return this.authorizedNumbers.some((auth) => {
      const authNormalized = auth.replace(/\D/g, '');
      return normalized.includes(authNormalized) || authNormalized.includes(normalized);
    });
  }

  /**
   * Register a message handler
   */
  onMessage(handler: (from: string, message: string) => Promise<void>) {
    if (!this.sock) {
      this.logger.warn('Socket not ready yet, message handler will register when connected');
      // Retry after 5 seconds
      setTimeout(() => this.onMessage(handler), 5000);
      return;
    }

    this.sock.ev.on('messages.upsert', async ({ messages }) => {
      const msg = messages[0];

      if (!msg.message || msg.key.fromMe) return;

      const from = msg.key.remoteJid;
      const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

      if (!text || !from) return;

      // Check authorization
      if (!this.isAuthorized(from)) {
        this.logger.warn(`Unauthorized access attempt from ${from}`);
        await this.sendMessage(
          from,
          'Sorry, you are not authorized to use this service.',
        );
        return;
      }

      this.logger.log(`Message from ${from}: ${text}`);

      try {
        await handler(from, text);
      } catch (error) {
        this.logger.error('Error handling message:', error);
        await this.sendMessage(
          from,
          'Sorry, there was an error processing your request.',
        );
      }
    });
  }

  getSocket(): WASocket {
    return this.sock;
  }
}
