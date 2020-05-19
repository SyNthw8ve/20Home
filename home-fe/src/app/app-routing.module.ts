import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeWorldComponent } from './home-world/home-world.component';
import { HomeCountriesComponent } from './home-countries/home-countries.component';
import { HomeCountryDetailsComponent } from './home-country-details/home-country-details.component';
import { HomeRegionsComponent } from './home-regions/home-regions.component';
import { HomeRegionDetailsComponent } from './home-region-details/home-region-details.component';
import { PointCaseComponent } from './point-case/point-case.component';

import { NavigateGuard } from './guards/navigate.guard';
import { SessionGuard } from './guards/session.guard';

import { CountryRecordsService } from './services/country-records-fetch.service';
import { CountryFetchService } from './services/country-fetch.service';
import { CountryRegionsFetchService } from './services/country-regions-fetch.service';
import { RegionRecordsFetchService } from './services/region-records-fetch.service';
import { RegionFetchService } from './services/region-fetch.service';
import { UserFetchService } from './services/user-fetch.service';

const routes: Routes =
  [
    { path: '', component: LandingComponent, canActivate: [SessionGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [SessionGuard] },
    {
      path: 'home', component: HomeComponent, canActivate: [NavigateGuard],
      
      resolve: {
        user: UserFetchService
      }, children: [

        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: HomeWorldComponent },
        { path: 'countries', component: HomeCountriesComponent },
        {
          path: 'country/:country',
          component: HomeCountryDetailsComponent,
          resolve: {
            country_records: CountryRecordsService,
            country: CountryFetchService,
            country_regions: CountryRegionsFetchService
          }
        },
        {
          path: 'regions',
          component: HomeRegionsComponent,
        },
        {
          path: 'region/:region',
          component: HomeRegionDetailsComponent,
          resolve: {
            region_details: RegionRecordsFetchService,
            region: RegionFetchService
          }
        },
        { path: 'add_case', component: PointCaseComponent }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
