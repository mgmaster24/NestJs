import { Module } from '@nestjs/common';
import { PowerSupplyModule } from 'src/power-supply/power-supply.module';
import { HardDiskService } from './hard-disk.service';

@Module({
  imports: [PowerSupplyModule],
  providers: [HardDiskService],
  exports: [HardDiskService]
})
export class HardDiskModule {}
