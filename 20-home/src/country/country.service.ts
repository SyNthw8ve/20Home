import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';
import { Region } from '../region/region.entity';

@Injectable()
export class CountryService {

  constructor(
    @InjectRepository(Country)
    private country_repository: Repository<Country>,
  ) {}

  find_all(): Promise<Country[]> {

    return this.country_repository.find();
  }

  find_one(country_code: string): Promise<Country> {
    
    return this.country_repository.findOne(country_code);
  }

  async find_regions(country_code: string): Promise<Region[]> {

    const countries = await this.country_repository.findOne({
      relations: ['regions'],
      where: {countryCode: country_code}
    });
  
    return countries.regions;
  }

  async remove(country_code: string): Promise<void> {
    await this.country_repository.delete(country_code);
  }
}