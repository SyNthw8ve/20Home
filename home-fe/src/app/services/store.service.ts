import { Injectable } from '@angular/core';
import { CovidService } from './covid.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private $countries = this.covid_service.get_country_data();
  private $regions = this.covid_service.get_region_data();
  private $notifications : BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private user;

  constructor(private covid_service: CovidService) {

    this.$notifications = new BehaviorSubject<any>([]);
  }

  get_countries() {

    return this.$countries.pipe(tap((items: any) => items.sort((a, b) => this.compare(a, b, 'countryName'))));
  }

  get_regions() {

    return this.$regions.pipe(tap((items: any) => items.sort((a, b) => this.compare(a, b, 'regionName'))));
  }

  set_notifications(notifications) {

    this.$notifications = new BehaviorSubject<any>(notifications);
  }

  get_notifications(): Observable<any> {

    return this.$notifications.asObservable().pipe(tap((items: any) => {

      items.map((item: any) => {

        item.notificationTime = new Date(item.notificationTime).toLocaleString();
        return item;
      })
    }));
  }

  add_notification(notification) {

    this.$notifications.next([...this.$notifications.value, notification]);
  }

  set_user(user) {

    this.user = user;
  }

  get_user() {

    return this.user;
  }

  update_notifications() {

    return this.covid_service.update_notifications(this.$notifications.value);
  }

  private compare(a, b, property) {

    if (a[property] > b[property]) return 1;

    else if (a[property] < b[property]) return -1;

    else return 0;
  }
}
