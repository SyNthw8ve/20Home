import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsRegionService } from './recordsregion.service';
import { RecordsRegionController } from './recordsregion.controller';
import { RecordsRegion } from './recordsregion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecordsRegion])],
  providers: [RecordsRegionService],
  controllers: [RecordsRegionController],
})
export class RecordsRegionModule {}