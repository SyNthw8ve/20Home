import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CovidService } from './covid.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionRecordsFetchService implements Resolve<any>{

  constructor(private covid_service: CovidService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const region_name = route.params.region;
    console.log(region_name)

    return this.covid_service.get_region_records(region_name);
  }
}
