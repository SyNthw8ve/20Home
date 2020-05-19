import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class NotifyService extends Socket {

  constructor() { 

    super({url: 'http://localhost:3000', options: {}})
  }

  connect_t() {

    this.connect();
  }

  disconnect_t() {

    this.disconnect();
  }
}
