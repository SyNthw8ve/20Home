import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocketIoModule } from 'ngx-socket-io';

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
import { SearchComponent } from './search/search.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeRegionDetailsComponent } from './home-region-details/home-region-details.component';
import { PointCaseComponent } from './point-case/point-case.component';

import { NotifyService } from './services/notify.service';

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
    HomeCountryDetailsComponent,
    SearchComponent,
    BreadcrumbComponent,
    HomeRegionDetailsComponent,
    PointCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    SocketIoModule
  ],
  providers: [httpInterceptorProviders, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
