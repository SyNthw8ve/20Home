import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { Predictions } from './predictions.entity';
import { PredictionsService } from './predictions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('predictions')
export class PredictionsController {

    constructor(private predictions_service: PredictionsService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/:country_code')
    get_predictions(@Param() params) : Promise<Predictions[]> {

        return this.predictions_service.find_all(params.country_code);
    }
}