import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-regions',
  templateUrl: './home-regions.component.html',
  styleUrls: ['./home-regions.component.sass']
})
export class HomeRegionsComponent implements OnInit {

  $regions;

  constructor(private store_service: StoreService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.$regions = this.store_service.get_regions();
  }

  
  navigate_to(region_name: string) {

    this.router.navigate([`region/${region_name}`], { relativeTo: this.route.parent });
  }
}
