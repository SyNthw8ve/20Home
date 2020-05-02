import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DBUserModule } from '../dbuser/dbuser.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [DBUserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
