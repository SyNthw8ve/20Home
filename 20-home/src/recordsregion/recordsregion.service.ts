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

  find_all(region_name: string): Promise<RecordsRegion[]> {

    return this.records_region_repository.find({region_name: region_name});
  }

  find_one(region_name: string, date: Date): Promise<RecordsRegion> {

    let date_val =  new Date(date).toLocaleString().split(" ")[0]
    let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

    return this.records_region_repository.findOne({region_name: region_name, record_date: date_local});
  }
}