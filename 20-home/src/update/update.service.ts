import { Injectable, HttpService, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UpdateService {

    private readonly logger = new Logger(UpdateService.name);

    constructor(@InjectQueue('update_records') private update_queue: Queue,
        private http: HttpService) { }

    @Cron('0 0 */1 * * *')
    async update_records() {

        this.http.get('https://api.covid19api.com/countries', {}).subscribe((res: any) => {

            res.data.forEach(async item => {

                try {
                    
                    await this.update_queue.add('records', { country: item })

                } catch (error) {
                    
                }
            }) 
        })
    }

    @Cron('0 0 */12 * * *')
    async update_country() {

        this.http.get('https://api.covid19api.com/summary', {}).subscribe((res: any) => {

            res.data.Countries.forEach(async item => {

                try {
                    
                    await this.update_queue.add('country', {country: item})

                } catch (error) {

                    
                }
            })
        })
    }
}
