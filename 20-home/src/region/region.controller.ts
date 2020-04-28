import { Controller, Get } from '@nestjs/common';
import { RegionService } from './region.service';
import { Region } from './region.entity';

@Controller('region')
export class RegionController {

  constructor(private region_service: RegionService) {}

  @Get()
  async findAll(): Promise<Region[]> {

    let result = await this.region_service.findAll();

    return result;
  }
}