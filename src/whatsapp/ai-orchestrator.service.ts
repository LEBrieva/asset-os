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
          content: `Eres un asistente EXCLUSIVAMENTE para consultar datos de portfolio de criptomonedas.

TU ÚNICO PROPÓSITO es ayudar al usuario a consultar información sobre SU PORTFOLIO PERSONAL de criptomonedas usando las funciones disponibles.

DEBES RESPONDER SOLO A:
- Consultas sobre el portfolio del usuario (total, cambios, distribución)
- Consultas sobre activos específicos que posee (cuánto tiene de BTC, ETH, XRP, etc.)
- Comparaciones entre fechas de su portfolio
- Estado del sistema de sincronización

NUNCA RESPONDAS a:
- Preguntas sobre el clima, noticias, información general
- Consejos de inversión o cómo comprar criptomonedas
- Explicaciones sobre qué es Bitcoin o criptomonedas
- Cualquier tema que NO sea consultar el portfolio existente del usuario

Si la pregunta NO es sobre consultar el portfolio del usuario, responde EXACTAMENTE:
"Esta pregunta está fuera de mi alcance. Solo puedo ayudarte a consultar tu portfolio de criptomonedas. Utiliza /help para ver los comandos disponibles."

IMPORTANTE: Siempre usa las funciones disponibles para obtener datos reales. NUNCA inventes números.`,
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
        {
          type: 'function',
          function: {
            name: 'get_portfolio_change',
            description: 'Compare portfolio total value between two dates. Shows if portfolio went up or down, by how much in USD and percentage, and which assets contributed most to the change. Defaults to comparing yesterday vs today.',
            parameters: {
              type: 'object',
              properties: {
                fromDate: {
                  type: 'string',
                  description: 'Start date in YYYY-MM-DD format. Defaults to yesterday.',
                },
                toDate: {
                  type: 'string',
                  description: 'End date in YYYY-MM-DD format. Defaults to today.',
                },
              },
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'get_asset_history',
            description: 'Compare a specific asset between two dates. Shows changes in token amount (bought/sold), USD value, and price. Helps identify if change was due to trading activity or market price movement. Defaults to comparing yesterday vs today.',
            parameters: {
              type: 'object',
              properties: {
                asset: {
                  type: 'string',
                  description: 'Asset symbol (e.g., BTC, ETH, XRP, USDT)',
                },
                fromDate: {
                  type: 'string',
                  description: 'Start date in YYYY-MM-DD format. Defaults to yesterday.',
                },
                toDate: {
                  type: 'string',
                  description: 'End date in YYYY-MM-DD format. Defaults to today.',
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

            case 'get_portfolio_change':
              const changeFrom = functionArgs.fromDate ? new Date(functionArgs.fromDate) : undefined;
              const changeTo = functionArgs.toDate ? new Date(functionArgs.toDate) : undefined;
              functionResult = await this.portfolioService.getPortfolioChange(
                changeFrom,
                changeTo,
              );
              break;

            case 'get_asset_history':
              const historyFrom = functionArgs.fromDate ? new Date(functionArgs.fromDate) : undefined;
              const historyTo = functionArgs.toDate ? new Date(functionArgs.toDate) : undefined;
              functionResult = await this.portfolioService.getAssetHistory(
                functionArgs.asset,
                historyFrom,
                historyTo,
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

        return finalResponse.choices[0].message.content || 'No pude generar una respuesta. Utiliza /help para ver los comandos disponibles.';
      }

      return responseMessage.content || 'No pude generar una respuesta. Utiliza /help para ver los comandos disponibles.';
    } catch (error) {
      this.logger.error('AI query failed:', error);
      return 'Lo siento, no pude procesar tu consulta. Utiliza /help para ver los comandos disponibles o intenta reformular tu pregunta.';
    }
  }
}
