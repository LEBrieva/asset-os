import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {
  Provider,
  ProviderBalanceResponse,
  AssetBalance,
} from '../../common/types/providers';

@Injectable()
export class SimpleFxService {
  private readonly logger = new Logger(SimpleFxService.name);
  private readonly baseUrl = 'https://rest.simplefx.com';
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.apiKey = this.configService.get<string>('SIMPLEFX_API_KEY') || '';
    this.apiSecret =
      this.configService.get<string>('SIMPLEFX_API_SECRET') || '';

    this.logger.log(`SimpleFX API Key loaded: ${this.apiKey ? this.apiKey.substring(0, 10) + '...' : 'NOT SET'}`);
    this.logger.log(`SimpleFX API Secret loaded: ${this.apiSecret ? this.apiSecret.substring(0, 10) + '...' : 'NOT SET'}`);
  }

  /**
   * Fetch ALL account balances from SimpleFX
   * Read-only operation
   */
  async getBalances(): Promise<ProviderBalanceResponse> {
    try {
      this.logger.log('Fetching balances from SimpleFX...');

      // Ensure we have a valid token
      await this.ensureAccessToken();

      // Get all accounts
      const accounts = await this.getAccounts();

      // Filter only LIVE accounts (exclude DEMO)
      const liveAccounts = accounts.filter((acc) => acc.reality === 'LIVE');

      // Convert to balance format
      // SimpleFX uses USD equity, so we'll represent it as a single USD balance
      const totalEquity = liveAccounts.reduce(
        (sum, acc) => sum + (acc.equity || 0),
        0,
      );

      const balances: AssetBalance[] = [
        {
          asset: 'USD',
          free: totalEquity.toFixed(8),
          locked: '0',
        },
      ];

      this.logger.log(
        `Fetched ${liveAccounts.length} LIVE SimpleFX account(s) (${accounts.length} total), total equity: $${totalEquity.toFixed(2)}`,
      );

      return {
        provider: Provider.SIMPLEFX,
        balances,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error('Failed to fetch SimpleFX balances', error.stack);
      throw error;
    }
  }

  /**
   * Get access token using API key
   */
  private async ensureAccessToken(): Promise<void> {
    // Check if token is still valid (expires in 1 hour typically)
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return;
    }

    this.logger.log('Obtaining SimpleFX access token...');

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          `${this.baseUrl}/api/v3/auth/key`,
          {
            clientId: this.apiKey,
            clientSecret: this.apiSecret,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        ),
      );

      this.logger.debug(`SimpleFX auth response: ${JSON.stringify(response.data)}`);

      const token = response.data.data?.token || response.data.access_token || response.data.token;
      if (!token) {
        throw new Error(`No token in response. Response: ${JSON.stringify(response.data)}`);
      }

      this.accessToken = token;
      // Set expiry to 50 minutes from now (tokens typically last 1 hour)
      this.tokenExpiry = Date.now() + 50 * 60 * 1000;

      this.logger.log(`SimpleFX access token obtained successfully: ${token.substring(0, 10)}...`);
    } catch (error) {
      this.logger.error('Failed to obtain SimpleFX access token', error.stack);
      throw new Error(`SimpleFX auth failed: ${error.message}`);
    }
  }

  /**
   * Get all trading accounts
   */
  private async getAccounts(): Promise<any[]> {
    if (!this.accessToken) {
      throw new Error('No access token available');
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/api/v3/accounts`, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }),
      );

      this.logger.debug(`SimpleFX accounts response: ${JSON.stringify(response.data)}`);

      // Handle both array and data wrapper formats
      const accounts = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];

      return accounts;
    } catch (error) {
      this.logger.error('Failed to fetch SimpleFX accounts', error.stack);
      throw error;
    }
  }

  /**
   * Test connection to SimpleFX API
   */
  async testConnection(): Promise<boolean> {
    try {
      await this.getBalances();
      return true;
    } catch (error) {
      this.logger.error('SimpleFX connection test failed', error.stack);
      return false;
    }
  }
}
