import { Module } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { PredictionsController } from './predictions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Predictions } from './predictions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Predictions])],
  providers: [PredictionsService],
  exports: [PredictionsService],
  controllers: [PredictionsController]
})
export class PredictionsModule {}
