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

  find_one(health_code: string): Promise<Healthprofissional> {

    return this.health_repository.findOne(health_code);
  }

  create_one(health_code: string, institution: string, position: Position): Promise<Healthprofissional> {

    return this.health_repository.save({
        healthCode: health_code,
        institution: institution,
        position: position
    });
  }
}