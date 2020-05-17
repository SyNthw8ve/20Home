import { Injectable, HttpService, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UpdateService {

    private readonly logger = new Logger(UpdateService.name);

    constructor(@InjectQueue('update_records') private update_queue: Queue,
        private http: HttpService) { }

    @Cron('*/30 * * * * *')
    update_records() {

        this.logger.debug("Test update");

        this.http.get('https://api.covid19api.com/countries', {}).subscribe((res: any) => {

            /* res.data.forEach((item) => {

                this.update_queue.add('country', { country: item });
            }) */

            res.data.forEach(item => {

                this.update_queue.add('country', { country: item }).then(() => {


                }).catch((err) => this.logger.error(err))
            })
        })
    }
}
