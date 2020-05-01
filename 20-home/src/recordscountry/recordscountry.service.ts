import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { RecordsCountry } from './recordscountry.entity';

@Injectable()
export class RecordsCountryService {

    constructor(
        @InjectRepository(RecordsCountry)
        private records_country_repository: Repository<RecordsCountry>,
      ) {}

    find_all(country_code: string): Promise<RecordsCountry[]> {

        return this.records_country_repository.find({country_code: country_code});
    }

    async find_one(country_code: string, date: Date): Promise<RecordsCountry> {

        let date_val =  new Date(date).toLocaleString().split(" ")[0]
        let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

        return this.records_country_repository.findOne({where: 
            {country_code: country_code, record_date: date_local}});
    }
}
