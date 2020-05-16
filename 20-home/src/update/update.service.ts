import { Injectable, HttpService, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UpdateService {

    private readonly logger = new Logger(UpdateService.name);

    constructor(private http: HttpService) {}

    @Cron('*/30 * * * * *')
    update_records() {

        this.logger.debug("Test update");
    }
}
