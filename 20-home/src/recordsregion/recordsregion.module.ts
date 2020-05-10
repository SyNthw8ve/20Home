import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsRegionService } from './recordsregion.service';
import { RecordsRegionController } from './recordsregion.controller';
import { Recordsregion } from './recordsregion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recordsregion])],
  providers: [RecordsRegionService],
  controllers: [RecordsRegionController],
})
export class RecordsRegionModule {}