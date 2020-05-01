import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Controller('country')
export class CountryController {

  constructor(private country_service: CountryService) {}

  @Get('')
  afindAll(): Promise<Country[]> {

    return this.country_service.findAll();
  }

  @Get(':country_code')
  find_one(@Param() params) : Promise<Country> {

    return this.country_service.findOne(params.country_code);
  }
}