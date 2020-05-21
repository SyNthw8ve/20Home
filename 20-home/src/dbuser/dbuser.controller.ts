import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { DBUserService } from './dbuser.service';
import { DBUser } from './dbuser.entity';
import { User} from './dbuser.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class DBUserController {

  constructor(private user_service: DBUserService) {}

  @Post('new')
  insert_new_user(@Body() n_user: User) {

    return this.user_service.create_one(n_user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('notification/:username')
  get_user_notification(@Param() params) {

    return this.user_service.get_notifications_from_user(params.username);
  }
}