import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBUser } from './dbuser.entity';
import { User } from './dbuser.dto';
import * as bcrypt from 'bcrypt';

const salt_rounds: number = 10;

@Injectable()
export class DBUserService {

  constructor(
    @InjectRepository(DBUser)
    private user_repository: Repository<DBUser>,
  ) {}

  async find_one(username: string): Promise<DBUser | undefined> {
    
    return this.user_repository.findOne(username);
  }

  async create_one(new_user: User): Promise<any> {

    let hash = await bcrypt.hash(new_user.password, salt_rounds);

    return this.user_repository.save({

       first_name: new_user.first_name,
       last_name: new_user.last_name,
       username: new_user.username,
       password: hash,
       email: new_user.email,
       long: new_user.long,
       lat: new_user.lat,
    })
  }
}