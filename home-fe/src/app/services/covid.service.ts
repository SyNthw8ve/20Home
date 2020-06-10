import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  path = "";

  get_region_data() {

    return this.http.get('/api/region');
  }

  get_country_data() {

    return this.http.get('/api/country');
  }

  get_region(region_name: string) {

    return this.http.get(`/api/region/${region_name}`);
  }

  get_country(country_code: string) {

    return this.http.get(`/api/country/${country_code}`);
  }

  get_country_regions(country_code: string) {

    return this.http.get(`/api/country/regions/${country_code}`);
  }

  get_country_records(country_code: string) {

    return this.http.get(`/api/records_country/${country_code}`);
  }

  get_region_records(region_name: string) {

    return this.http.get(`/api/records_region/${region_name}`);
  }

  get_predictions(country_code: string) {

    return this.http.get(`/api/predictions/${country_code}`);
  }

  create_user(user) {

    return this.http.post('/api/user/new', user, {});
  }

  add_new_case(new_case) {

    return this.http.post('/api/pointcases/new', new_case, {});
  }

  update_notifications(notifications) {
    
    return this.http.put('/api/notification/update', notifications, {});
  }

  check_email_available(email: string) {

    const params: HttpParams = new HttpParams().set('email', email);

    return this.http.get('/api/user/check_email', {params: params});
  }

  check_username_available(username: string) {

    const params: HttpParams = new HttpParams().set('username', username);

    return this.http.get('/api/user/check_username', {params: params});
  }

  check_health_code(health_code: string) {

    const params: HttpParams = new HttpParams().set('health_code', health_code);

    return this.http.get('/api/user/check_health_code', {params: params});
  }
}
