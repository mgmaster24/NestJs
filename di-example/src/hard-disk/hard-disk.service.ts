import { Injectable } from '@nestjs/common';
import { PowerSupplyService } from 'src/power-supply/power-supply.service';

@Injectable()
export class HardDiskService {
  constructor(private powerSupplyService: PowerSupplyService) {}

  getData() {
    console.log(
      'Hard disk is drawing 20 watts of power from the power supply!'
    );
    this.powerSupplyService.supplyPower(20);
    return 'Gimme Data!';
  }
}
