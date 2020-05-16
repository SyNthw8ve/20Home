import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Healthprofissional } from './healthprofessional.entity';
import { Position } from '../dbuser/dbuser.dto';

@Injectable()
export class HealthProfessionalService {

  constructor(
    @InjectRepository(Healthprofissional)
    private health_repository: Repository<Healthprofissional>,
  ) {}

  find_all(): Promise<Healthprofissional[]> {

    return this.health_repository.find();
  }

  find_one(username: string): Promise<Healthprofissional> {

    return this.health_repository.findOne(username);
  }

  create_one(username: string, health_code: string, institution: string, position: Position): Promise<Healthprofissional> {

    return this.health_repository.save({
        username: username,
        healthCode: health_code,
        institution: institution,
        position: position
    });
  }
}