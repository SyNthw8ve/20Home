import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './region.entity';

@Injectable()
export class RegionService {

  constructor(
    @InjectRepository(Region)
    private region_repository: Repository<Region>,
  ) {}

  find_all(): Promise<Region[]> {

    return this.region_repository.find();
  }

  find_one(region_name: string): Promise<Region> {

    return this.region_repository.findOne(region_name);
  }
}