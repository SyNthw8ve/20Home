import { Controller, Get } from '@nestjs/common';
import { RecordsRegionService } from './recordsregion.service';
import { RecordsRegion } from './recordsregion.entity';

@Controller('records_region')
export class RecordsRegionController {

  constructor(private records_region_service: RecordsRegionService) {}

  @Get()
  async findAll(): Promise<RecordsRegion[]> {

    let result = await this.records_region_service.findAll();

    return result;
  }
}