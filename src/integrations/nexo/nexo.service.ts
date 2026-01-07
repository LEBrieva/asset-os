import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { parse } from 'csv-parse/sync';
import * as crypto from 'crypto';
import {
  Provider,
  ProviderBalanceResponse,
  AssetBalance,
} from '../../common/types/providers';

interface NexoCSVRecord {
  Transaction: string;
  Type: string;
  'Input Currency': string;
  'Input Amount': string;
  'Output Currency': string;
  'Output Amount': string;
  'USD Equivalent': string;
  Details: string;
  'Date / Time': string;
}

interface NexoAPIBalance {
  assetName: string;
  totalBalance: string;
  availableBalance: string;
  lockedBalance: string;
  debt: string;
  interest: string;
}

@Injectable()
export class NexoService {
  private readonly logger = new Logger(NexoService.name);
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiUrl = 'https://api.nexo.io';

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('NEXO_API_KEY') || '';
    this.apiSecret = this.configService.get<string>('NEXO_API_SECRET') || '';
  }

  /**
   * Parse Nexo CSV export and extract balances
   * CSV format example:
   * Transaction,Type,Input Currency,Input Amount,Output Currency,Output Amount,USD Equivalent,Details,Date / Time
   */
  async parseCSVAndGetBalances(
    csvContent: string | Buffer,
  ): Promise<ProviderBalanceResponse> {
    try {
      this.logger.log('Parsing Nexo CSV file...');

      const csvString =
        csvContent instanceof Buffer ? csvContent.toString('utf-8') : csvContent;

      // Parse CSV
      const records = parse(csvString, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
      }) as NexoCSVRecord[];

      this.logger.debug(`Parsed ${records.length} transactions from CSV`);

      // Calculate balances from all transactions
      const balanceMap = new Map<string, number>();

      for (const record of records) {
        // Input amounts (withdrawals, exchanges out)
        if (record['Input Amount'] && record['Input Currency']) {
          const amount = parseFloat(record['Input Amount']);
          const currency = record['Input Currency'].toUpperCase();

          if (!isNaN(amount) && amount > 0) {
            const current = balanceMap.get(currency) || 0;
            balanceMap.set(currency, current - amount);
          }
        }

        // Output amounts (deposits, exchanges in, interest)
        if (record['Output Amount'] && record['Output Currency']) {
          const amount = parseFloat(record['Output Amount']);
          const currency = record['Output Currency'].toUpperCase();

          if (!isNaN(amount) && amount > 0) {
            const current = balanceMap.get(currency) || 0;
            balanceMap.set(currency, current + amount);
          }
        }
      }

      // Convert to balance format
      const balances: AssetBalance[] = [];
      for (const [currency, amount] of balanceMap.entries()) {
        if (amount > 0) {
          balances.push({
            asset: currency,
            free: amount.toFixed(8),
            locked: '0',
          });
        }
      }

      this.logger.log(
        `Calculated ${balances.length} asset balances from Nexo CSV`,
      );

      return {
        provider: Provider.NEXO,
        balances,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error('Failed to parse Nexo CSV', error.stack);
      throw error;
    }
  }

  /**
   * Test if CSV can be parsed
   */
  async testCSV(csvContent: string | Buffer): Promise<boolean> {
    try {
      await this.parseCSVAndGetBalances(csvContent);
      return true;
    } catch (error) {
      this.logger.error('Nexo CSV test failed', error.stack);
      return false;
    }
  }

  /**
   * Get balances from Nexo API
   * Requires NEXO_API_KEY and NEXO_API_SECRET environment variables
   */
  async getBalancesFromAPI(): Promise<ProviderBalanceResponse> {
    try {
      this.logger.log('Fetching balances from Nexo API...');

      if (!this.apiKey || !this.apiSecret) {
        throw new Error('Nexo API credentials not configured. Set NEXO_API_KEY and NEXO_API_SECRET in .env');
      }

      // Generate authentication headers
      const timestamp = Date.now().toString();
      const nonce = crypto.randomBytes(16).toString('hex');
      const signature = this.generateSignature(timestamp, nonce);

      // Call Nexo API
      const response = await fetch(`${this.apiUrl}/wallets`, {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
          'X-NONCE': nonce,
          'X-TIMESTAMP': timestamp,
          'X-SIGNATURE': signature,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Nexo API error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      this.logger.debug('Nexo API response:', JSON.stringify(data));

      // Parse API response to balances
      const balances: AssetBalance[] = [];

      if (data.balances && Array.isArray(data.balances)) {
        for (const balance of data.balances as NexoAPIBalance[]) {
          const totalBalance = parseFloat(balance.totalBalance || '0');
          const availableBalance = parseFloat(balance.availableBalance || '0');
          const lockedBalance = parseFloat(balance.lockedBalance || '0');

          if (totalBalance > 0) {
            balances.push({
              asset: balance.assetName.toUpperCase(),
              free: availableBalance.toFixed(8),
              locked: lockedBalance.toFixed(8),
            });
          }
        }
      }

      this.logger.log(`Fetched ${balances.length} assets from Nexo API`);

      return {
        provider: Provider.NEXO,
        balances,
        timestamp: new Date(),
      };
    } catch (error) {
      this.logger.error('Failed to fetch Nexo balances from API', error.stack);
      throw error;
    }
  }

  /**
   * Generate HMAC signature for Nexo API authentication
   */
  private generateSignature(timestamp: string, nonce: string): string {
    const message = `${timestamp}${nonce}`;
    const hmac = crypto.createHmac('sha256', this.apiSecret);
    hmac.update(message);
    return hmac.digest('hex');
  }
}
