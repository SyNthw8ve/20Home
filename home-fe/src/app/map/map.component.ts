import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

import * as L from 'leaflet';
import { leaflet_token } from '../../../config.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Input() points: any[];
  @Input() view: any;
  @Input() zoom: number;
  @Output() new_click = new EventEmitter<any>();
  private map;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.initMap();
  }
  
  private initMap(): void {

    this.map = L.map('map').setView([this.view.lat, this.view.long], this.zoom);

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${leaflet_token}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      minZoom: 1.5,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: leaflet_token
    }).addTo(this.map);
    
    this.points.forEach(item => {

      L.circle([item.lat, item.long], {
        color: 'none',
        fillColor: '#f03',
        fillOpacity: 0.8,
        radius: item.confirmed * 1.5
      }).addTo(this.map);
    });
    
    this.map.on('click', (e) => {

      this.new_click.emit(e.latlng);
    })
  }

}
