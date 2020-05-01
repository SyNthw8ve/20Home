import { Controller, Get, Param } from '@nestjs/common';
import { RecordsRegionService } from './recordsregion.service';
import { RecordsRegion } from './recordsregion.entity';

@Controller('records_region/:region_name')
export class RecordsRegionController {

  constructor(private records_region_service: RecordsRegionService) {}

  @Get()
  find_all(@Param() params): Promise<RecordsRegion[]> {

    return this.records_region_service.find_all(params.region_name);
  }

  @Get(':date')
  find_one(@Param() params): Promise<RecordsRegion> {

    return this.records_region_service.find_one(params.region_name, params.date);
  }
}