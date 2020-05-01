import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBUser } from './dbuser.entity';

@Injectable()
export class DBUserService {

  constructor(
    @InjectRepository(DBUser)
    private user_repository: Repository<DBUser>,
  ) {}

  async find_one(username: string): Promise<DBUser | undefined> {
    
    return this.user_repository.findOne(username);
  }
}