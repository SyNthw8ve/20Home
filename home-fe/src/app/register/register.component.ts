import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { StoreService } from '../services/store.service';
import { CovidService } from '../services/covid.service';

import * as M from 'materialize-css/dist/js/materialize.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  countries;
  regions;
  register: FormGroup;

  
  /* region_name = new FormControl('');
  country = new FormControl('');
  
  health_professional = new FormControl(false); */

  constructor(private store: StoreService, private form_builder: FormBuilder, private covid_service: CovidService) { 

   
  }

  ngAfterViewInit(): void {
    
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

  }

  async ngOnInit() {
    
    this.register = this.form_builder.group({

      username: '',
      password: '',
      long: null,
      lat: null,
      country: null,
      region: null,
    })

    this.countries =  this.store.get_countries();
    this.regions = this.store.get_regions();
  }


  set_position(position) {
    
    this.register.patchValue({long: position.coords.longitude, lat: position.coords.latitude});
  }
}
