import { Controller, Get } from '@nestjs/common';
import { RecordsCountryService } from './recordscountry.service';
import { RecordsCountry } from './recordscountry.entity';

@Controller('records_countries')
export class RecordsCountryController {

    constructor(private records_country_service: RecordsCountryService) {}

    @Get()
    async findAll(): Promise<RecordsCountry[]> {

        let result = await this.records_country_service.findAll();

        return result;
    }
}