import { Controller, Get, Param } from '@nestjs/common';
import { DBUserService } from './dbuser.service';
import { DBUser } from './dbuser.entity';

@Controller('user')
export class DBUserController {

  constructor(private user_service: DBUserService) {}
}