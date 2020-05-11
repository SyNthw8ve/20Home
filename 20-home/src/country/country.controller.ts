import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';
import { Region } from '../region/region.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('country')
export class CountryController {

  constructor(private country_service: CountryService) {}

  @Get('')
  findAll(): Promise<Country[]> {

    return this.country_service.find_all();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':country_code')
  find_one(@Param() params) : Promise<Country> {

    return this.country_service.find_one(params.country_code);
  }

  @UseGuards(JwtAuthGuard)
  @Get('regions/:country_code')
  find_regions(@Param() params) : Promise<Region[]> {
    
    return this.country_service.find_regions(params.country_code);
  }
}