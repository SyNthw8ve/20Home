import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-home-country-details',
  templateUrl: './home-country-details.component.html',
  styleUrls: ['./home-country-details.component.sass']
})
export class HomeCountryDetailsComponent implements OnInit, AfterViewInit {

  country_records;
  country_data;
  country_card_data;
  country_details;
  country_regions;
  nav_position = ['Countries'];
  cardColor: string = '#f5f5f5';
  colorScheme = {
    domain: ['#d1c4e9', '#b39ddb', '#9575cd']
  };
  colorSchemeLine = {
    domain: ['#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#7986cb']
  };
  colorSchemeNum = {
    domain: ['#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2']
  };
  view;
  zoom = 5;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.data.subscribe((data) => {

      if (data.country_records.length > 0) {

        const last = data.country_records.length - 1;

        this.country_card_data = [

          {
            name: "Confirmed",
            value: data.country_records[last].cases
          },
          {
            name: "Deaths",
            value: data.country_records[last].deaths
          },
          {
            name: "Active",
            value: data.country_records[last].active
          },
          {
            name: "Recovered",
            value: data.country_records[last].recovered
          },
        ]

        this.country_data = [
          {

            "name": "Confirmed",
            "value": data.country['confirmed']
          },
          {
            "name": "Recovered",
            "value": data.country['recovered']
          },
          {
            "name": "Deaths",
            "value": data.country['deaths']
          }
        ]
      }

      this.country_records = data.country_records.length > 0 ? this.to_format(data.country_records, data.predictions) : null;

      this.country_details = data.country;
      this.nav_position.push(data.country.countryName);
      this.view = { lat: data.country.lat, long: data.country.long };

      this.country_regions = data.country_regions.length > 0 ? this.to_marker(data.country_regions) : null;
    })
  }

  ngAfterViewInit() {

    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems, {});
  }

  private to_format(country_records, predictions) {

    let data = [
      { name: "Active", series: [] },
      { name: "Cases", series: [] },
      { name: "Deaths", series: [] },
      { name: "Recovered", series: [] },
      { name: "Active Prediction", series: [] }
    ];

    country_records.forEach((record) => {

      const date = new Date(record.recordDate).toLocaleString()

      data[0].series.push({ name: date, value: record.active })
      data[1].series.push({ name: date, value: record.cases })
      data[2].series.push({ name: date, value: record.deaths })
      data[3].series.push({ name: date, value: record.recovered })
    })

    predictions.forEach((prediction) => {

      const date = new Date(prediction.predictionDate).toLocaleString();

      data[4].series.push({ name: date, value: prediction.predictionValue })
    })

    return data;
  }

  private to_marker(country_regions) {

    return country_regions.map(region => { return { lat: region.lat, long: region.long, title: region.regionName } });
  }

  navigate_to(region_name: string) {

    this.router.navigate([`region/${region_name}`], { relativeTo: this.route.parent });
  }

}
