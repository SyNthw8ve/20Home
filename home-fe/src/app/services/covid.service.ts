import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  get_country_data() {

    return this.http.get('/api/country');
  }

  get_region_data() {

    return this.http.get('/api/region');
  }

  create_user(user) {

    return this.http.post('/api/user/new', user, {});
  }

  login(user) {

    return this.http.post('/api/auth/login', user, {});
  }
}
