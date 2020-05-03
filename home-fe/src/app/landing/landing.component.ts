import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { StoreService } from '../services/store.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as L from 'leaflet';
import { leaflet_token } from '../../../config.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit, AfterViewInit {

  private map;
  private all_data;
  login;

  constructor(private covid_service: CovidService, private store: StoreService,
              private form_builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.login = this.form_builder.group({

      username: ['', Validators.required],
      password: ['', Validators.required],
      health_professional: false
    })

    this.all_data = this.store.get_countries();
  }

  ngAfterViewInit(): void {

    this.initMap();
  }

  on_submit() {

    console.log(this.login.value);

    this.covid_service.login(this.login.value).subscribe((res: any) => {

      if (res) {
        
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['/home']);
      }
    })
  }

  private initMap(): void {

    this.map = L.map('map').setView([0, 0], 2.45);

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${leaflet_token}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      minZoom: 1.5,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
    }).addTo(this.map);

    this.all_data.subscribe(points => {

      points.forEach(item => {

        L.circle([item.lat, item.long], {
          color: 'none',
          fillColor: '#f03',
          fillOpacity: 0.8,
          radius: item.confirmed * 1.5
        }).addTo(this.map);
      });
    });
  }
}
