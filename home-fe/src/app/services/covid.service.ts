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

  create_user() {

    return this.http.post('/api/user/new', {body: ''});
  }
}
