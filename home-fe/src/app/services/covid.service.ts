import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  get_country_data() {

    return this.http.get('/api/country');
  }

  get_country(country_code: string) {

    return this.http.get(`/api/country/${country_code}`);
  }

  get_country_records(country_code: string) {

    return this.http.get(`/api/records_country/${country_code}`);
  }

  get_region_data() {

    return this.http.get('/api/region', {});
  }

  create_user(user) {

    return this.http.post('/api/user/new', user, {});
  }
}
