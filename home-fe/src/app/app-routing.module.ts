import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeCountriesComponent } from './home-countries/home-countries.component';

import { NavigateGuard } from './guards/navigate.guard';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = 
[
  {path: '', component: LandingComponent, canActivate: [SessionGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [SessionGuard]},
  {path: 'home', component: HomeComponent, canActivate: [NavigateGuard], children: [

    {path: '', component: HomeCountriesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
