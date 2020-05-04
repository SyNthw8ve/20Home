import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home-world',
  templateUrl: './home-world.component.html',
  styleUrls: ['./home-world.component.sass']
})
export class HomeWorldComponent implements OnInit {

  public all_data;

  constructor(private store: StoreService) { }

  ngOnInit(): void {

    this.all_data = this.store.get_countries();
  }

}
