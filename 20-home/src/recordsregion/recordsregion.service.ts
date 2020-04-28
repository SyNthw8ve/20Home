import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordsRegion } from './recordsregion.entity';

@Injectable()
export class RecordsRegionService {

  constructor(
    @InjectRepository(RecordsRegion)
    private records_region_repository: Repository<RecordsRegion>,
  ) {}

  findAll(): Promise<RecordsRegion[]> {
    return this.records_region_repository.find();
  }
}