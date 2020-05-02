import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  register = new FormGroup({

    username: new FormControl(''),
    password: new FormControl(''),
    long: new FormControl(),
    lat: new FormControl(),
  })
  /* region_name = new FormControl('');
  country = new FormControl('');
  
  health_professional = new FormControl(false); */

  constructor() { 

    
  }

  ngAfterViewInit(): void {
    
    /* if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(this.set_position);
    } */
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

  }

  ngOnInit(): void {
    
    
  }


  set_position(position) {
    
    this.register.patchValue({long: position.coords.longitude, lat: position.coords.latitude});
  }
}
