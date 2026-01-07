import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SnapshotsService } from '../snapshots/snapshots.service';
import { Provider } from '@prisma/client';

@Controller('admin')
export class AdminController {
  constructor(private readonly snapshotsService: SnapshotsService) {}

  @Post('sync/run')
  async runSync(
    @Body()
    body: {
      providers?: Provider[];
      snapshotDate?: string;
    },
  ) {
    const date = body.snapshotDate ? new Date(body.snapshotDate) : undefined;
    const result = await this.snapshotsService.runSync(date, body.providers);

    return {
      snapshotId: result.snapshotId,
      status: 'started',
    };
  }

  @Get('sync/status/:snapshotId')
  async getStatus(@Param('snapshotId') snapshotId: string) {
    return this.snapshotsService.getSnapshotStatus(snapshotId);
  }

  @Post('nexo/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadNexoCSV(
    @UploadedFile() file: Express.Multer.File,
    @Body('snapshotDate') snapshotDate?: string,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const date = snapshotDate ? new Date(snapshotDate) : undefined;
    const result = await this.snapshotsService.uploadNexoCSV(
      file.buffer,
      date,
    );

    return {
      snapshotId: result.snapshotId,
      status: 'success',
      assetsImported: result.assetsImported,
    };
  }

  @Post('nexo/sync')
  async syncNexoFromAPI(@Body('snapshotDate') snapshotDate?: string) {
    const date = snapshotDate ? new Date(snapshotDate) : undefined;
    const result = await this.snapshotsService.syncNexoFromAPI(date);

    return {
      snapshotId: result.snapshotId,
      status: 'success',
      assetsImported: result.assetsImported,
    };
  }

  @Post('nexo/manual')
  async addNexoManualBalances(
    @Body('balances') balances: Array<{ asset: string; amount: number }>,
    @Body('snapshotDate') snapshotDate?: string,
  ) {
    if (!balances || balances.length === 0) {
      throw new BadRequestException('Balances array is required');
    }

    const date = snapshotDate ? new Date(snapshotDate) : undefined;
    const result = await this.snapshotsService.addNexoManualBalances(
      balances,
      date,
    );

    return {
      snapshotId: result.snapshotId,
      status: 'success',
      assetsImported: result.assetsImported,
    };
  }
}
