import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { Country } from './country.entity';

import { RegionModule } from '../region/region.module';

@Module({
  imports: [TypeOrmModule.forFeature([Country]), RegionModule],
  providers: [CountryService],
  controllers: [CountryController],
  exports: [CountryService]
})
export class CountryModule {}