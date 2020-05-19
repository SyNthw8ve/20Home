import { Injectable } from '@angular/core';
import { CovidService } from './covid.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private $countries = this.covid_service.get_country_data();
  private $regions = this.covid_service.get_region_data();

  constructor(private covid_service: CovidService) { 

  }

  get_countries() {

    return this.$countries.pipe(tap((items: any) => items.sort((a, b) => this.compare(a, b, 'countryName'))));
  }

  get_regions() {

    return this.$regions.pipe(tap((items: any) => items.sort((a, b) => this.compare(a, b, 'regionName'))));
  }

  private compare(a, b, property) {

    if (a[property] > b[property]) return 1;

    else if (a[property] < b[property]) return -1;

    else return 0;
  }
}
