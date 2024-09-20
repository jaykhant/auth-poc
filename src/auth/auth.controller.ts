import { Controller, Get, Req } from '@nestjs/common';
import { User } from '../common/decorator/user.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('profile')
  profile(@User() user) {
    return user;
  }

  @Get('logout')
  async logout(@Req() request) {
    const logout_token = await this.authService.logout(request.headers.cookie);
    return { logout_token };
  }
}
