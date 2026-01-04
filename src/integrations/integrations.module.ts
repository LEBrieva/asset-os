import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { BitgetService } from './bitget/bitget.service';
import { SimpleFxService } from './simplefx/simplefx.service';
import { NexoService } from './nexo/nexo.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
    ConfigModule,
  ],
  providers: [BitgetService, SimpleFxService, NexoService],
  exports: [BitgetService, SimpleFxService, NexoService],
})
export class IntegrationsModule {}
