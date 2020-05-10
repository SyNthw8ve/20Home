import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pointcases } from './pointcases.entity';
import { NewCaseDto } from './pointcases.dto';

@Injectable()
export class PointcasesService {

    constructor(
        @InjectRepository(Pointcases)
        private cases_repository: Repository<Pointcases>,
      ) {}
    
      find_all(): Promise<Pointcases[]> {
    
        return this.cases_repository.find();
      }

      find_region(region_name: string): Promise<Pointcases[]> {

        return this.cases_repository.find({where: {region_name: region_name}});
      }

      find_date(date: Date): Promise<Pointcases[]> {

        let date_val =  new Date(date).toLocaleString().split(" ")[0]
        let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

        return this.cases_repository.find({where: {case_time: date_local}});
      }

      insert_new_case(new_case: NewCaseDto): void {

        this.cases_repository.insert({
            long: new_case.long,
            lat: new_case.lat,
            caseTime: new_case.case_time
        })
      }
}
