import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-region-details',
  templateUrl: './home-region-details.component.html',
  styleUrls: ['./home-region-details.component.sass']
})
export class HomeRegionDetailsComponent implements OnInit {

  region_records;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe((data : any) => {

      this.region_records = data.region_details;
      console.log(this.region_records)
    })
  }

}
