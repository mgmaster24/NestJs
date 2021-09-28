import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('hello')
  getRootRoute() {
    return 'Hello There 2!';
  }

  @Get('bye')
  getBye() {
    return 'Later Bro!';
  }
}
