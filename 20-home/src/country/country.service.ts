import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

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

  async remove(country_code: string): Promise<void> {
    await this.country_repository.delete(country_code);
  }
}