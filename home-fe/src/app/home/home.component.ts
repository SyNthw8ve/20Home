import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { NotifyService } from '../services/notify.service';
import { StoreService } from '../services/store.service';

import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  user;
  $notifications;

  constructor(private user_service: UserService, private auth_service: AuthService,
    private router: Router, private notify_service: NotifyService,
    private route: ActivatedRoute, private store_service: StoreService) { }

  ngOnDestroy(): void {

    this.notify_service.remove(this.user.username);
    this.notify_service.removeAllListeners();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event): void {

    this.notify_service.remove(this.user.username);
  }

  ngAfterViewInit(): void {

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { preventScrolling: true });
  }

  ngOnInit(): void {

    this.route.data.subscribe((data: any) => {

      this.user = data.user.user;

      this.store_service.set_user(this.user);
      this.notify_service.register(this.user);
    })

    this.notify_service.on('notification', (data) => {

      if (data.notificationType == 'proximity') {

        M.toast({ html: 'New case detected near you!' })
      }

      this.store_service.add_notification(data);
    })
  }

  logout() {

    this.notify_service.remove(this.user.username);
    this.router.navigate(['/']);
    this.auth_service.logout();
  }

}
