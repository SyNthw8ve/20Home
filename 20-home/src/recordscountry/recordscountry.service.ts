import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    find_one(country_code: string, date: Date): Promise<RecordsCountry> {

        return this.records_country_repository.findOne({ country_code: country_code, record_date: date})
    }
}
