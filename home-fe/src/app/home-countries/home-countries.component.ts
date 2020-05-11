import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Router, ActivatedRoute } from '@angular/router';

import * as M from 'materialize-css/dist/js/materialize.js';
@Component({
  selector: 'app-home-countries',
  templateUrl: './home-countries.component.html',
  styleUrls: ['./home-countries.component.sass']
})
export class HomeCountriesComponent implements OnInit, AfterViewInit {

  $countries;

  constructor(private store_service: StoreService, private router: Router,
              private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, {});
  }

  ngOnInit(): void {

    this.$countries = this.store_service.get_countries();
  }

  navigate_details(code: string) {

      this.router.navigate([`country/${code}`], { relativeTo: this.route.parent })
  }
}
