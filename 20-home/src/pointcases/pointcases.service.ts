import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointCases } from './pointcases.entity';
import { NewCaseDto } from './pointcases.dto';

@Injectable()
export class PointcasesService {

    constructor(
        @InjectRepository(PointCases)
        private cases_repository: Repository<PointCases>,
      ) {}
    
      find_all(): Promise<PointCases[]> {
    
        return this.cases_repository.find();
      }

      find_region(region_name: string): Promise<PointCases[]> {

        return this.cases_repository.find({where: {region_name: region_name}});
      }

      find_date(date: Date): Promise<PointCases[]> {

        let date_val =  new Date(date).toLocaleString().split(" ")[0]
        let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

        return this.cases_repository.find({where: {case_time: date_local}});
      }

      insert_new_case(new_case: NewCaseDto): void {

        this.cases_repository.insert({
            long: new_case.long,
            lat: new_case.lat,
            region_name: new_case.region_name,
            case_time: new_case.case_time
        })
      }
}
