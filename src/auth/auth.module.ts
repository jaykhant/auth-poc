import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OryHelper } from '../common/helper/OryHelper';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService, OryHelper, ConfigService],
})
export class AuthModule {}
