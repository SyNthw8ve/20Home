import { Controller, Get, Param } from '@nestjs/common';
import { RecordsCountryService } from './recordscountry.service';
import { RecordsCountry } from './recordscountry.entity';

@Controller('records_country/:country_code')
export class RecordsCountryController {

    constructor(private records_country_service: RecordsCountryService) {}

    @Get('')
    findAll(@Param() params): Promise<RecordsCountry[]> {

       return this.records_country_service.find_all(params.country_code);
    }

    @Get(':date')
    find_one(@Param() params): Promise<RecordsCountry> {

        return this.records_country_service.find_one(params.country_code, params.data);
    }
}