import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  all_data;
  login;
  zoom = 2.45;

  constructor(private store: StoreService, private auth_service: AuthService,
              private form_builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.login = this.form_builder.group({

      username: ['', Validators.required],
      password: ['', Validators.required],
      health_professional: false
    })

    this.all_data = this.store.get_countries();
  }

  on_submit() {

    this.auth_service.login(this.login.value).subscribe((res: any) => {

      if (res) {
        
        this.router.navigate(['/home']);
      }
    })
  }
}
