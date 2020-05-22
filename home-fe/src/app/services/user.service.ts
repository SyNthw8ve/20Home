import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get_user_data() {

    return this.http.get('/profile');
  }

  get_user_notification(username) {

    return this.http.get(`/user/notification/${username}`, {});
  }
}
