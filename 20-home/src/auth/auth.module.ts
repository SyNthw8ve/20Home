import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DBUserModule } from '../dbuser/dbuser.module';

@Module({
  imports: [DBUserModule],
  providers: [AuthService]
})
export class AuthModule {}
