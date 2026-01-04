import { Injectable, Logger } from '@nestjs/common';
import { parse } from 'csv-parse/sync';
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

@Injectable()
export class NexoService {
  private readonly logger = new Logger(NexoService.name);

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
}
