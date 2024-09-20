import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guard/auth.guard';
import { RolesGuard } from './common/guard/roles.guard';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { OryHelper } from './common/helper/OryHelper';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    AdminModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useExisting: AuthGuard,
    },
    AuthGuard,
    {
      provide: APP_GUARD,
      useExisting: RolesGuard,
    },
    RolesGuard,
    OryHelper,
  ],
})
export class AppModule {}
