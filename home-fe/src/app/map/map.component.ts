import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { leaflet_token } from '../../../config.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('map') mapContainer;

  @Input() points: any[];
  @Input() markers: any[];
  @Input() view: any;
  @Input() zoom: number;
  @Output() new_click = new EventEmitter<any>();

  private map;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnDestroy(): void {

    console.log("Destroy");
  }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

    this.map = L.map(this.mapContainer.nativeElement).setView([this.view.lat, this.view.long], this.zoom);

    this.initMap();
  }

  private initMap(): void {

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      access_token: leaflet_token
    }).addTo(this.map);

    this.points.forEach(item => {

      L.circle([item.lat, item.long], {
        color: 'none',
        fillColor: '#9575cd',
        fillOpacity: 0.75,
        radius: item.confirmed * 1.5
      }).addTo(this.map);
    });

    this.markers.forEach(marker => {

      let new_marker = L.marker([marker.lat, marker.long], {
        title: marker.title
      });

      new_marker.addTo(this.map);

      new_marker.on('click', (e) => {

        this.router.navigate([`region/${marker.title}`], { relativeTo: this.route.parent });
      })
    })

    this.map.on('click', (e) => {

      this.new_click.emit(e.latlng);
    })
  }

}
