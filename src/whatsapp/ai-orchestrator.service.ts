import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { PortfolioService } from '../portfolio/portfolio.service';

@Injectable()
export class AiOrchestratorService {
  private readonly logger = new Logger(AiOrchestratorService.name);
  private readonly openai: OpenAI;

  constructor(
    private readonly configService: ConfigService,
    private readonly portfolioService: PortfolioService,
  ) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    this.openai = new OpenAI({ apiKey });
  }

  /**
   * Process a natural language query using OpenAI function calling
   */
  async processQuery(query: string): Promise<string> {
    try {
      this.logger.log(`Processing AI query: ${query}`);

      const messages: OpenAI.ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: `You are an assistant for a portfolio tracking system. You can help users query their cryptocurrency and asset portfolio data. Use the provided functions to fetch real data. Never make up numbers or data. Always use functions to get current information.`,
        },
        {
          role: 'user',
          content: query,
        },
      ];

      const tools: OpenAI.ChatCompletionTool[] = [
        {
          type: 'function',
          function: {
            name: 'portfolio_summary',
            description: 'Get portfolio summary with total USD value and breakdown by provider',
            parameters: {
              type: 'object',
              properties: {
                date: {
                  type: 'string',
                  description: 'Date in YYYY-MM-DD format. Omit for today.',
                },
              },
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'portfolio_allocation',
            description: 'Get portfolio allocation breakdown by asset or provider',
            parameters: {
              type: 'object',
              properties: {
                groupBy: {
                  type: 'string',
                  enum: ['asset', 'provider'],
                  description: 'Group by asset or provider',
                },
                date: {
                  type: 'string',
                  description: 'Date in YYYY-MM-DD format. Omit for today.',
                },
              },
              required: ['groupBy'],
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'get_asset_holdings',
            description: 'Get detailed holdings for a specific cryptocurrency or asset (e.g., BTC, ETH, XRP, USDT). Returns total amount, USD value, current price, and breakdown by provider.',
            parameters: {
              type: 'object',
              properties: {
                asset: {
                  type: 'string',
                  description: 'Asset symbol (e.g., BTC, ETH, XRP, USDT)',
                },
                date: {
                  type: 'string',
                  description: 'Date in YYYY-MM-DD format. Omit for today.',
                },
              },
              required: ['asset'],
            },
          },
        },
      ];

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
        tools,
        tool_choice: 'auto',
      });

      const responseMessage = response.choices[0].message;

      // Check if AI wants to call a function
      if (responseMessage.tool_calls) {
        // Execute function calls
        for (const toolCall of responseMessage.tool_calls) {
          if (toolCall.type !== 'function') continue;
          const functionName = toolCall.function.name;
          const functionArgs = JSON.parse(toolCall.function.arguments);

          this.logger.log(`AI calling function: ${functionName} with args:`, functionArgs);

          let functionResult: any;

          switch (functionName) {
            case 'portfolio_summary':
              const date = functionArgs.date ? new Date(functionArgs.date) : undefined;
              functionResult = await this.portfolioService.getSummary(date);
              break;

            case 'portfolio_allocation':
              const allocDate = functionArgs.date ? new Date(functionArgs.date) : undefined;
              functionResult = await this.portfolioService.getAllocation(
                allocDate,
                functionArgs.groupBy,
              );
              break;

            case 'get_asset_holdings':
              const assetDate = functionArgs.date ? new Date(functionArgs.date) : undefined;
              functionResult = await this.portfolioService.getAssetHoldings(
                functionArgs.asset,
                assetDate,
              );
              break;

            default:
              functionResult = { error: 'Unknown function' };
          }

          // Add function result to messages
          messages.push(responseMessage);
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(functionResult),
          });
        }

        // Get final response from AI
        const finalResponse = await this.openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages,
        });

        return finalResponse.choices[0].message.content || 'No response from AI';
      }

      return responseMessage.content || 'No response from AI';
    } catch (error) {
      this.logger.error('AI query failed:', error);
      return 'Sorry, I could not process your request. Please try again or use a command like /total or /status.';
    }
  }
}
