import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { HardDiskService } from 'src/hard-disk/hard-disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private hardDiskService: HardDiskService,
    private cpuService: CpuService
  ) {}

  @Get('run')
  run() {
    return [this.cpuService.compute(5, 5), this.hardDiskService.getData()];
  }
}
