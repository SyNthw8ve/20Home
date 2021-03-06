import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../services/store.service';
import { UserService } from '../services/user.service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-notifications',
  templateUrl: './home-notifications.component.html',
  styleUrls: ['./home-notifications.component.sass']
})
export class HomeNotificationsComponent implements OnInit, OnDestroy {

  $notifications : Observable<any>;

  constructor(private store_service: StoreService, private user_service: UserService) { }

  ngOnDestroy(): void {
    
    this.store_service.update_notifications().subscribe( (res) => {


    });
  }

  ngOnInit(): void {

    let username = this.store_service.get_user().username;

    this.user_service.get_user_notification(username).subscribe( (data: any) => {

      this.store_service.set_notifications(data);
      this.$notifications = this.store_service.get_notifications();
    })

  }

}
