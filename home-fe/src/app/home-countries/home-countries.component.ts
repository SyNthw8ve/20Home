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
  colorScheme = {
    domain: ['#d1c4e9', '#b39ddb']
  };

  constructor(private store_service: StoreService, private router: Router,
    private route: ActivatedRoute) { }

  ngAfterViewInit(): void {

    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, {});
  }

  ngOnInit(): void {

    this.store_service.get_countries().subscribe(data => {

      this.$countries = data.map(country => {

        return {
          countryName: country.countryName, countryCode: country.countryCode, results: [
            { name: 'Deaths', value: country.deaths },
            { name: 'Recovered', value: country.recovered },
          ]
        }
      });
    });
  }

  navigate_details(code: string) {

    this.router.navigate([`country/${code}`], { relativeTo: this.route.parent })
  }
}
