import { Module } from '@nestjs/common';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';
import { CpuService } from './cpu.service';

@Module({
  imports: [PowerSupplyModule],
  providers: [CpuService],
  exports: [CpuService]
})
export class CpuModule {}
