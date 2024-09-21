import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { OryHelper } from '../common/helper/OryHelper';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [OryHelper, ConfigService],
})
export class AuthModule {}
