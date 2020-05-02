import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Controller('country')
export class CountryController {

  constructor(private country_service: CountryService) {}

  @Get('')
  findAll(): Promise<Country[]> {

    return this.country_service.find_all();
  }

  @Get(':country_code')
  find_one(@Param() params) : Promise<Country> {

    return this.country_service.find_one(params.country_code);
  }
}