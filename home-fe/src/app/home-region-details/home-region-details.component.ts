import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-home-region-details',
  templateUrl: './home-region-details.component.html',
  styleUrls: ['./home-region-details.component.sass']
})
export class HomeRegionDetailsComponent implements OnInit, AfterViewInit {

  region_records;
  region;
  region_details;
  view;
  zoom = 6;
  nav_position = ['Regions'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe((data : any) => {

      this.region_records = data.region_details.length > 0 ? this.to_format(data.region_details) : null;
      this.region = data.region;
      this.region_details = {lat: this.region.lat, long: this.region.long, confirmed: data.region_details[0].confirmed}
      this.nav_position.push(data.region.regionName);
      this.view = { lat: data.region.lat, long: data.region.long };
    })
  }

  ngAfterViewInit() {

    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems, {});
  }

  private to_format(region_records) {

    let data = [
      { name: "Recovered", series: [] },
      { name: "Cases", series: [] },
      { name: "Deaths", series: [] }
    ];

    region_records.forEach((record) => {

      const date = new Date(record.recordDate).toLocaleString()

      data[0].series.push({ name: date, value: record.recovered })
      data[1].series.push({ name: date, value: record.confirmed })
      data[2].series.push({ name: date, value: record.deaths })
    })

    return data;
  }

}
