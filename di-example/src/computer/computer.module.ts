import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { HardDiskModule } from 'src/hard-disk/hard-disk.module';
import { ComputerController } from './computer.controller';

@Module({
  imports: [CpuModule, HardDiskModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
