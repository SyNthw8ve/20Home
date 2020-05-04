import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  $user;
  $countries;

  constructor(private user_service: UserService, private auth_service: AuthService,
    private router: Router) { }

  ngAfterViewInit(): void {
    
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {preventScrolling: true});
  }

  ngOnInit(): void {

    this.$user = this.user_service.get_user_data();

  }

  logout() {

    this.router.navigate(['/']);
    this.auth_service.logout();
  }

}
