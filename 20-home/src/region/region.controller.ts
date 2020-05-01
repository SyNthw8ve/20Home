import { Controller, Get, Param } from '@nestjs/common';
import { RegionService } from './region.service';
import { Region } from './region.entity';

@Controller('region')
export class RegionController {

  constructor(private region_service: RegionService) {}

  @Get()
  find_all(): Promise<Region[]> {

    return this.region_service.find_all();
  }

  @Get(':region_name')
  find_regions(@Param() params): Promise<Region> {

    return this.region_service.find_one(params.region_name);
  }

  @Get(':country_code')
  find_regions_country(@Param() params): Promise<Region[]> {

    return this.region_service.find_all_country(params.country_code);
  }
}