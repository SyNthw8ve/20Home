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

    findAll(): Promise<RecordsCountry[]> {

        return this.records_country_repository.find();
    }
}
