import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Controller('country')
export class CountryController {

  constructor(private country_service: CountryService) {}

  @Get('all')
  async findAll(): Promise<Country[]> {

    let result = await this.country_service.findAll();

    return result;
  }
}