import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home-countries',
  templateUrl: './home-countries.component.html',
  styleUrls: ['./home-countries.component.sass']
})
export class HomeCountriesComponent implements OnInit {

  $countries;

  constructor(private store_service: StoreService) { }

  ngOnInit(): void {

    this.$countries = this.store_service.get_countries();
  }

}
