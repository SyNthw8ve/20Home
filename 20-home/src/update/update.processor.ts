import { Logger } from '@nestjs/common';
import { Processor, Process, OnQueueActive } from '@nestjs/bull';
import { Job } from 'bull';
import { RecordsCountryService } from '../recordscountry/recordscountry.service';
import { RecordsRegionService } from '../recordsregion/recordsregion.service';
import { CountryService } from '../country/country.service';
import { HttpService } from '@nestjs/common';

@Processor('update_records')
export class UpdateProcessor {

    constructor(private records_country_service: RecordsCountryService,
        private records_region_service: RecordsRegionService,
        private country_service: CountryService,
        private http: HttpService) { }

    private readonly logger = new Logger(UpdateProcessor.name);

    @Process('records')
    async update_records(job: Job<unknown>) {

        const data: any = job.data;
        const country = data.country;

        const last_update: Date = await this.records_country_service.get_last_date(country['ISO2']);

        const date_string = this.format_date(last_update);

        const url: string = `https://api.covid19api.com/live/country/${country.Slug}/status/confirmed/date/${date_string}`;

        this.logger.log(`Checking for record updates of country ${country.Country}`)

        this.http.get(url, {}).subscribe((res: any) => {

            const logs = res.data;

            if (logs.length == 0) this.logger.log(`Records of ${country.Country} is up to date`);

            else {

                this.logger.log(`Found ${logs.length} new entries for country ${country.Country}. Updating...`)

                const records = this.filter_countries(logs);

                const records_country = records.countries;
                const records_region = records.regions;

                try {

                    this.records_country_service.insert_new_records(records_country);

                } catch (err) {

                    this.logger.error(err);
                }

                try {

                    this.records_region_service.insert_new_records(records_region);

                } catch (err) {

                    this.logger.error(err);
                }


                this.logger.log(`Updated entries for country ${country.Country}`);
            }

        });

    }

    @Process('country')
    async update_country(job: Job<unknown>) {

        const data: any = job.data;
        const country_data = data.country;

        const update_data = {
            countryCode: country_data.CountryCode, confirmed: country_data.TotalConfirmed,
            deaths: country_data.TotalDeaths, recovered: country_data.TotalRecovered
        }

        try {

            this.logger.log(`Updating country ${country_data.Country} values...`);

            await this.country_service.update_country(update_data);

            this.logger.log(`Updated country ${country_data.Country}`);

        } catch (error) {

        }
    }

    private filter_countries(countries) {

        let records_country = countries.filter(country => country['Province'] == '');
        let records_region = countries.filter(country => country['Province'] != '');

        records_country = records_country.map(country => {

            const record =
            {
                countryCode: country['CountryCode'],
                recordDate: country['Date'],
                cases: country['Confirmed'],
                deaths: country['Deaths'],
                active: country['Active'],
                recovered: country['Recovered']
            }

            return record;
        })

        records_region = records_region.map(region => {

            const record =
            {
                regionName: region['Province'],
                recordDate: region['Date'],
                confirmed: region['Confirmed'],
                deaths: region['Deaths'],
                recovered: region['Recovered']
            }

            return record;
        })

        return { countries: records_country, regions: records_region };
    }

    private format_date(date): string {

        const date_parts = date.toLocaleString().replace(',', '').split(' ');

        let date_string = date_parts[0];
        let date_time = date_parts[1];
        date_string = date_string.split("/").reverse().join("-");

        date_string = `${date_string}T${date_time}Z`;

        return date_string;
    }

    private update_country_data(country_code: string): void {


    }
}