import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBUser } from './dbuser.entity';
import { User, Position } from './dbuser.dto';
import { HealthProfessionalService } from '../healthprofessional/healthprofessional.service';
import * as bcrypt from 'bcrypt';

const salt_rounds: number = 10;

@Injectable()
export class DBUserService {

  constructor(
    @InjectRepository(DBUser)
    private user_repository: Repository<DBUser>,
    private health_service: HealthProfessionalService,
  ) { }

  async find_one(username: string): Promise<DBUser | undefined> {

    return this.user_repository.findOne(username);
  }

  async create_one(new_user: User): Promise<any> {

    let hash = await bcrypt.hash(new_user.password, salt_rounds);

    let user = {
      firstName: new_user.first_name,
      lastName: new_user.last_name,
      username: new_user.username,
      password: hash,
      email: new_user.email,
      long: new_user.long,
      lat: new_user.lat,
      role: 'u',
    }

    if (new_user.health_professional) {

      const health_profissional = await this.health_service.create_one(new_user.username, new_user.health_code,
        new_user.institution, Position[new_user.position]);

      user.role = 'h';
    }

    return this.user_repository.save(user);
  }
}