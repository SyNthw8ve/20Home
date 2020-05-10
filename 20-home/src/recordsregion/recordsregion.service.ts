import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recordsregion } from './recordsregion.entity';

@Injectable()
export class RecordsRegionService {

  constructor(
    @InjectRepository(Recordsregion)
    private records_region_repository: Repository<Recordsregion>,
  ) {}

  find_all(region_name: string): Promise<Recordsregion[]> {

    return this.records_region_repository.find({regionName: region_name});
  }

  find_one(region_name: string, date: Date): Promise<Recordsregion> {

    let date_val =  new Date(date).toLocaleString().split(" ")[0]
    let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

    return this.records_region_repository.findOne({regionName: region_name, recordDate: date_local});
  }
}