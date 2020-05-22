import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {

    return this.http.post('/auth/login', user, {}).pipe(tap( res => this.set_session(res) ))
  }

  private set_session(auth_result) {

    const expires_in = jwt_decode(auth_result.access_token).exp;
    const expires_at = moment().add(expires_in, 'second');

    localStorage.setItem('access_token', auth_result.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expires_at.valueOf()));
  }

  logout() {

    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  public is_logged_in(): boolean {

    return moment().isBefore(this.get_expiration());
  }

  public is_logged_out(): boolean {

    return !this.is_logged_in();
  }

  get_expiration() {

    const expires_at = localStorage.getItem('expires_at');
    
    return moment(JSON.parse(expires_at));
  }
}
