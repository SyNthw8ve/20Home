import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  all_data;
  login;
  zoom = 2.45;
  login_error = false;

  constructor(private store: StoreService, private auth_service: AuthService,
    private form_builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.login = this.form_builder.group({

      username: [null, Validators.required],
      password: [null, Validators.required],
    })

    this.all_data = this.store.get_countries();
  }

  on_submit() {

    if (this.login.valid) {

      this.auth_service.login(this.login.value).pipe(
        catchError(err => {
          this.login_error = true;
          return throwError(err)
        }))
        .subscribe((res: any) => {

          if (res) {

            this.login_error = false;
            this.router.navigate(['/home']);
          }

        }, (error) => {


        })
    }
  }
}
