import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService extends Socket {

  constructor() { 

    super({url: 'http://localhost:3000', options: {}})
  }

  register(user_data) {

    this.connect();
    this.emit('register', user_data)
  }

  remove(username) {
    
    this.emit('remove_user', username);
    this.disconnect();
  }

  get_notifications() {

    return this.fromEvent('notification');
  }
}
