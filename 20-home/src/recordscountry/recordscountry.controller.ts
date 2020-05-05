import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RecordsCountryService } from './recordscountry.service';
import { RecordsCountry } from './recordscountry.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('records_country/:country_code')
export class RecordsCountryController {

    constructor(private records_country_service: RecordsCountryService) {}

    @UseGuards(JwtAuthGuard)
    @Get('')
    findAll(@Param() params): Promise<RecordsCountry[]> {

       return this.records_country_service.find_all(params.country_code);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':date')
    find_one(@Param() params): Promise<RecordsCountry> {

        return this.records_country_service.find_one(params.country_code, params.date);
    }
}