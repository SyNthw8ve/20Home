import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { DBUserService } from './dbuser.service';
import { DBUser } from './dbuser.entity';
import { User} from './dbuser.dto';

@Controller('user')
export class DBUserController {

  constructor(private user_service: DBUserService) {}

  @Post('new')
  insert_new_user(@Body() n_user: User) {

    return this.user_service.create_one(n_user);
  }
}