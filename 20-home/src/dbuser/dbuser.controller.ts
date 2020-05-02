import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { DBUserService } from './dbuser.service';
import { DBUser } from './dbuser.entity';

@Controller('user')
export class DBUserController {

  constructor(private user_service: DBUserService) {}

  @Post('new')
  async insert_new_user(@Body() body) {

    console.log(body);
  }
}