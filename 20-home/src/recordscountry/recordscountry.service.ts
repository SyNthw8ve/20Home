import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Recordscountry } from './recordscountry.entity';

@Injectable()
export class RecordsCountryService {

    constructor(
        @InjectRepository(Recordscountry)
        private records_country_repository: Repository<Recordscountry>,
      ) {}

    find_all(country_code: string): Promise<Recordscountry[]> {

        return this.records_country_repository.find({countryCode: country_code});
    }

    find_one(country_code: string, date: Date): Promise<Recordscountry> {
        
        //REVIEW:
        let date_val =  new Date(date).toLocaleString().split(" ")[0]
        let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

        return this.records_country_repository.findOne({countryCode: country_code, recordDate: date_local});
    }
}
