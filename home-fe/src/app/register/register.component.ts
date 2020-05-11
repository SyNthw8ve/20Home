import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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


  constructor(private store: StoreService, private form_builder: FormBuilder, private covid_service: CovidService) { 

   
  }

  ngAfterViewInit(): void {
    
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

  }

  ngOnInit() {
    
    this.register = this.form_builder.group({

      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      long: [null, Validators.required],
      lat: [null, Validators.required],
      country:  ['', Validators.required],
      region:  [''],
      role: ['', Validators.required],
      health_code: ['', Validators.required],
      institution: ['', Validators.required],
      health_professional: false,
    })

    this.countries =  this.store.get_countries();
    this.regions = this.store.get_regions();
  }


  set_position(position) {
    
    this.register.patchValue({long: position.coords.longitude, lat: position.coords.latitude});
  }

  on_submit() {
    
    let user = this.register.value;
    
    this.register.get('health_professional').value ? user['role'] = 'h' : user['role'] = 'u';

    this.covid_service.create_user(this.register.value).subscribe(res => {

      console.log(res)
    });
  }
}
