import { Module, HttpModule } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateProcessor } from './update.processor';
import { BullModule } from '@nestjs/bull';
import { RecordsCountryModule } from '../recordscountry/recordscountry.module';
import { RecordsRegionModule } from '../recordsregion/recordsregion.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'update_records'
    }),
    HttpModule,
    RecordsCountryModule,
    RecordsRegionModule
  ],
  providers: [UpdateService, UpdateProcessor],
  exports: [UpdateService],
  controllers: [],
})
export class UpdateModule { }