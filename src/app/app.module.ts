import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DeviceComponent } from './devices/devices.component';
import { AdddeviceComponent } from './devices/adddevice/adddevice.component';
import { InsidedeviceComponent } from './devices/insidedevice/insidedevice.component';
import { DaystepsComponent } from './steps/day-steps/daysteps.component';
import { WeekstepsComponent } from './steps/week-steps/weeksteps.component';
import { MonthstepsComponent } from './steps/month-steps/monthsteps.component';
import { DaysleepComponent } from './sleep/day-sleep/daysleep.component';
import { WeeksleepComponent } from './sleep/week-sleep/weeksleep.component';
import { MonthsleepComponent } from './sleep/month-sleep/monthsleep.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { DayheartrateComponent } from './heartrate/day-heartrate/dayheartrate.component';
import { WeekheartrateComponent } from './heartrate/week-heartrate/weekheartrate.component';
import { MonthheartrateComponent } from './heartrate/month-heartrate/monthheartrate.component';
import { YearheartrateComponent } from './heartrate/year-heartrate/yearheartrate.component';
//import { Login2Module } from '../app/login/login.module';

const appRoutes: Routes = [
  {
      path: '**',
      redirectTo: 'login'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Login2Component,
    HomeComponent,
    ProfileComponent,
    DeviceComponent,
    AdddeviceComponent,
    InsidedeviceComponent,
    DaystepsComponent,
    WeekstepsComponent,
    MonthstepsComponent,
    DaysleepComponent,
    WeeksleepComponent,
    MonthsleepComponent,
    RecommendationsComponent,
    DayheartrateComponent,
    WeekheartrateComponent,
    MonthheartrateComponent,
    YearheartrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelect2Module,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    //Login2Module,
    RouterModule.forRoot(appRoutes, { useHash: true, onSameUrlNavigation: 'reload' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
