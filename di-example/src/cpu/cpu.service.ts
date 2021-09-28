import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from 'src/power-supply/power-supply.service';

@Injectable()
export class CpuService {
  constructor(private powerSupplyService: PowerSupplyService) {}

  compute(a: number, b: number) {
    console.log('CPU is drawing 10 watts of power from the power supply!');
    this.powerSupplyService.supplyPower(10);
    return a + b;
  }
}
