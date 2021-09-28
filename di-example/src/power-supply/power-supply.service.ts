import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerSupplyService {
  supplyPower(watts: number) {
    console.log(`Power supply is supplying ${watts} watts worth of power!`);
  }
}
