import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { httpInterceptorProviders } from './http-interceptors/index';
import { HomeCountriesComponent } from './home-countries/home-countries.component';
import { MapComponent } from './map/map.component';
import { HomeWorldComponent } from './home-world/home-world.component';
import { HomeRegionsComponent } from './home-regions/home-regions.component';
import { HomeCountryDetailsComponent } from './home-country-details/home-country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    RegisterComponent,
    HomeCountriesComponent,
    MapComponent,
    HomeWorldComponent,
    HomeRegionsComponent,
    HomeCountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
