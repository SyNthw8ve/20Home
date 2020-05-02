import { Injectable } from '@angular/core';
import { CovidService } from './covid.service';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private $countries = this.covid_service.get_country_data();
  private $regions = this.covid_service.get_region_data();

  constructor(private covid_service: CovidService) { 

  }

  get_countries() {

    return this.$countries;
  }

  get_regions() {

    return this.$regions;
  }
}
