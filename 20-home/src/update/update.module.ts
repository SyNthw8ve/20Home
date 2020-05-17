import { Module, HttpModule } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateProcessor } from './update.processor';
import { BullModule } from '@nestjs/bull';


@Module({
  imports: [
    BullModule.registerQueue({
      name: 'update_records'
    }),
    HttpModule
  ],
  providers: [UpdateService, UpdateProcessor],
  exports: [UpdateService],
  controllers: [],
})
export class UpdateModule { }