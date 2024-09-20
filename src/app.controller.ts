import { Controller, Get } from '@nestjs/common';
import { Public } from './common/decorator/auth.public.decorator';

@Controller('/public')
export class AppController {
  @Get()
  @Public()
  getHello() {
    return { message: 'Hello from /public GET endpoint.' };
  }
}
