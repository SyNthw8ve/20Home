import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-home-country-details',
  templateUrl: './home-country-details.component.html',
  styleUrls: ['./home-country-details.component.sass']
})
export class HomeCountryDetailsComponent implements OnInit, AfterViewInit {

  country_records;
  country_details;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe((data) => {

      this.country_records = this.to_format(data.country_records);
      this.country_details = data.country;
    })
  }

  ngAfterViewInit() {

    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems, {});
  }

  private to_format(country_records) {

    let data = [
      { name: "Active", series: [] },
      { name: "Cases", series: [] },
      { name: "Deaths", series: [] }
    ];

    country_records.forEach((record) => {

      const date = new Date(record.record_date).toLocaleString()

      data[0].series.push({name: date, value: record.active})
      data[1].series.push({name: date, value: record.cases})
      data[2].series.push({name: date, value: record.deaths})
    })

    return data;
  }

}
