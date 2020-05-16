import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';

@Module({
  imports: [],
  providers: [UpdateService],
  controllers: [],
})
export class UpdateModule {}