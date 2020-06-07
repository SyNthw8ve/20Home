import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recordscountry } from './recordscountry.entity';
import { RecordCountry } from './recordscountry.dto';

@Injectable()
export class RecordsCountryService {

    constructor(
        @InjectRepository(Recordscountry)
        private records_country_repository: Repository<Recordscountry>,
    ) { }

    find_all(country_code: string): Promise<Recordscountry[]> {

        return this.records_country_repository.find({ countryCode: country_code });
    }

    find_one(country_code: string, date: Date): Promise<Recordscountry> {

        //REVIEW:
        let date_val = new Date(date).toLocaleString().split(" ")[0]
        let date_local = (date_val.split("/").reverse().join("-") + " 00:00:00").replace(',', '');

        return this.records_country_repository.findOne({ countryCode: country_code, recordDate: date_local });
    }

    async get_last_date(country_code: string): Promise<Date> {

        const result = await this.records_country_repository.createQueryBuilder('records')
            .where('records.country_code = :code', { code: country_code })
            .orderBy('records.record_date', 'DESC')
            .getOne()

        return result.recordDate;
    }

    async get_last_entry(country_code: string): Promise<any> {

        return await this.records_country_repository.createQueryBuilder('records')
            .where('records.country_code = :code', { code: country_code })
            .orderBy('records.record_date', 'DESC')
            .getOne()
    }

    async insert_new_records(records: RecordCountry[]): Promise<any> {

        const result = await this.records_country_repository.save(records)

        return result;
    }
}
