import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CovidService } from './covid.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryRecordsService implements Resolve<any> {

    constructor(private covid_service: CovidService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        
        const country_code = route.params.country;

        return this.covid_service.get_country_records(country_code);
    }
}
