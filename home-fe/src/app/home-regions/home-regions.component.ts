import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home-regions',
  templateUrl: './home-regions.component.html',
  styleUrls: ['./home-regions.component.sass']
})
export class HomeRegionsComponent implements OnInit {

  $regions;

  constructor(private store_service: StoreService) { }

  ngOnInit(): void {

    this.$regions = this.store_service.get_regions();
  }

}
