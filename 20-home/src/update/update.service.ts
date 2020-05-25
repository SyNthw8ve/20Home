import { Injectable, HttpService, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { RecordsCountryService } from '../recordscountry/recordscountry.service';
import * as tf from '@tensorflow/tfjs-node';

@Injectable()
export class UpdateService {

    private readonly logger = new Logger(UpdateService.name);

    constructor(@InjectQueue('update_records') private update_queue: Queue,
        private records_country_service: RecordsCountryService,
        private http: HttpService) { }

    @Cron('0 0 */12 * * *')
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

                    await this.update_queue.add('country', { country: item })

                } catch (error) {


                }
            })
        })
    }

    @Cron('0 0 1 * * *')
    async update_portugal() {

        this.http.get('https://covid19-api.vost.pt/Requests/get_last_update', {}).subscribe(async (res: any) => {

            const last_update = res.data;

            const data = {
                date: last_update.data_dados + ':00', records: [
                    {
                        regionName: 'Norte',
                        confirmed: last_update.confirmados_arsnorte,
                        recovered: last_update.recuperados_arsnorte == null ? 0 : last_update.recuperados_arsnorte,
                        deaths: last_update.obitos_arsnorte
                    },
                    {
                        regionName: 'Centro',
                        confirmed: last_update.confirmados_arscentro,
                        recovered: last_update.recuperados_arscentro == null ? 0 : last_update.recuperados_arscentro,
                        deaths: last_update.obitos_arscentro
                    },
                    {
                        regionName: 'Lisboa e Vale do Tejo',
                        confirmed: last_update.confirmados_arslvt,
                        recovered: last_update.recuperados_arslvt == null ? 0 : last_update.recuperados_arslvt,
                        deaths: last_update.obitos_arslvt
                    },
                    {
                        regionName: 'Alentejo',
                        confirmed: last_update.confirmados_arsalentejo,
                        recovered: last_update.recuperados_arsalentejo == null ? 0 : last_update.recuperados_arsalentejo,
                        deaths: last_update.obitos_arsalentejo
                    },
                    {
                        regionName: 'Algarve',
                        confirmed: last_update.confirmados_arsalgarve,
                        recovered: last_update.recuperados_arsalgarve == null ? 0 : last_update.recuperados_arsalgarve,
                        deaths: last_update.obitos_arsalgarve
                    },
                    {
                        regionName: 'Açores',
                        confirmed: last_update.confirmados_acores,
                        recovered: last_update.recuperados_acores == null ? 0 : last_update.recuperados_acores,
                        deaths: last_update.obitos_acores
                    },
                    {
                        regionName: 'Madeira',
                        confirmed: last_update.confirmados_madeira,
                        recovered: last_update.recuperados_madeira == null ? 0 : last_update.recuperados_madeira,
                        deaths: last_update.obitos_madeira
                    },
                ]
            }

            this.update_queue.add('portugal', { regions: data })
        })
    }

    @Cron('0 */1 * * * *')
    async update_models() {

        //this.update_queue.add('model', {country_code: 'PT'});

        const country = 'PT' //data.country_code;

        let records_country = await this.records_country_service.find_all_train(country);

        records_country.forEach(record => {

            console.log({date: new Date(record.recordDate).getTime(), cases: record.active});
        })

       /*  let X_train = tf.tensor3d(records_country.map(record => {

            return new Date(record.recordDate).getTime();
        }), [records_country.length,1,1])

        console.log(X_train) */

        /* let  Y_train = tf.tensor3d(records_country.map(record => {

            return record.active;
        }), [records_country.length,1,1])

        const last_value = new Date(records_country.pop().recordDate).getTime();

        let model = tf.sequential();
        model.add(tf.layers.lstm({ units: 20, returnSequences: true, inputShape: [19,1]}));
        model.add(tf.layers.lstm({ units: 20, returnSequences: true }));
        model.add(tf.layers.timeDistributed({ layer: tf.layers.dense({ units: 10 }) }));

        model.compile({
            optimizer: 'adam',
            loss: 'meanSquaredError',
            metrics: ['mse']
        });

        this.logger.log(model.summary());

        function onBatchEnd(batch, logs) {

            this.logger.log(`Model erro: ${logs.acc}`);
        }

        model.fit(X_train, Y_train, {

            epochs: 5,
            batchSize: 32,
            callbacks: { onBatchEnd },
            validationSplit: 0.2

        }).then(info => {
            console.log('Final accuracy', info.history.acc);
        });

        for (let i = 1; i <= 10; i++) {

            let next_pred = tf.tensor1d([last_value + 86400000 * i]);

            let prediction = model.predict(next_pred);
            console.log(prediction);
        } */
    }
}
