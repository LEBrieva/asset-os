import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

console.log('=== main.ts loaded ===');

const logger = new Logger('Bootstrap');

async function bootstrap() {
  console.log('=== bootstrap() called ===');
  try {
    logger.log('Creating NestJS application...');
    const app = await NestFactory.create(AppModule);

    const port = process.env.PORT ?? 3000;
    logger.log(`Starting server on port ${port}...`);

    await app.listen(port);

    logger.log(`🚀 Application is running on: http://localhost:${port}`);
  } catch (error) {
    logger.error('Failed to start application:', error);
    process.exit(1);
  }
}

bootstrap();
