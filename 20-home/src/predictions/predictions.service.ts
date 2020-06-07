import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Predictions } from './predictions.entity';

@Injectable()
export class PredictionsService {

    constructor(@InjectRepository(Predictions)
    private predictions_repository: Repository<Predictions>) {

    }

    find_all(country_code: string): Promise<Predictions[]> {

        return this.predictions_repository.find({countryCode: country_code});
    }
}
