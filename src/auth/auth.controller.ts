import { Controller, Get } from '@nestjs/common';
import { User } from '../common/decorator/user.decorator';

@Controller('auth')
export class AuthController {
  @Get('profile')
  profile(@User() user) {
    return user;
  }
}
