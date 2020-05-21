import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CovidService } from '../services/covid.service';
import { StoreService } from '../services/store.service';

import * as M from 'materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-point-case',
  templateUrl: './point-case.component.html',
  styleUrls: ['./point-case.component.sass']
})
export class PointCaseComponent implements OnInit, AfterViewInit, OnDestroy {

  new_case;
  $user;
  countries;
  regions;

  constructor(private form_builder: FormBuilder, private user_service: UserService,
    private covid_service: CovidService, private store_service: StoreService) { }


  ngOnDestroy(): void {
   
    //this.$user.unsubscribe();
    //this.countries.unsubscribe();
    //this.regions.unsubscribe();
  }

  ngAfterViewInit(): void {

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  ngOnInit(): void {

    this.new_case = this.form_builder.group({

      long: [null, Validators.required],
      lat: [null, Validators.required],
      symptoms: [[], Validators.required],
      countryCode: ['', Validators.required],
      regionName: ['']
    })

    this.$user = this.store_service.get_user();
    this.countries = this.store_service.get_countries();
    this.regions = this.store_service.get_regions();
  }

  on_submit() {

    this.covid_service.add_new_case(this.new_case.value).subscribe( (res: any) => {

      if (res.success) M.toast({html: 'Add Case'})

      else M.toast({html: 'There is something wrong'})
    })
  }

  update_coords(event) {

    const long = event.lng;
    const lat = event.lat;

    this.new_case.patchValue({
      long: long,
      lat: lat
    })
  }

}
