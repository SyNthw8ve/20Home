import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { leaflet_token } from '../../../config.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit, AfterViewInit {

  private map;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.initMap();
  }

  private initMap(): void {
    
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${leaflet_token}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
    }).addTo(this.map);
  }
}
