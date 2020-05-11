import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RecordsRegionService } from './recordsregion.service';
import { Recordsregion } from './recordsregion.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('records_region/:region_name')
export class RecordsRegionController {

  constructor(private records_region_service: RecordsRegionService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  find_all(@Param() params): Promise<Recordsregion[]> {

    return this.records_region_service.find_all(params.region_name);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':date')
  find_one(@Param() params): Promise<Recordsregion> {

    return this.records_region_service.find_one(params.region_name, params.date);
  }
}