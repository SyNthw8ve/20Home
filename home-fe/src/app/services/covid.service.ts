import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  path = "";

  get_region_data() {

    return this.http.get('/region');
  }

  get_country_data() {

    return this.http.get('/country');
  }

  get_region(region_name: string) {

    return this.http.get(`/region/${region_name}`);
  }

  get_country(country_code: string) {

    return this.http.get(`/country/${country_code}`);
  }

  get_country_regions(country_code: string) {

    return this.http.get(`/country/regions/${country_code}`);
  }

  get_country_records(country_code: string) {

    return this.http.get(`/records_country/${country_code}`);
  }

  get_region_records(region_name: string) {

    return this.http.get(`/records_region/${region_name}`);
  }

  create_user(user) {

    return this.http.post('/user/new', user, {});
  }

  add_new_case(new_case) {

    return this.http.post('/pointcases/new', new_case, {});
  }

  update_notifications(notifications) {
    
    return this.http.put('/notification/update', notifications, {});
  }
}
