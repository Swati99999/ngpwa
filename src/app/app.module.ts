import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// import { CommonModule  } from '@angular/common';

 
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
import { YearSleepComponent } from './sleep/year-sleep/year-sleep.component';
import { YearStepsComponent } from './steps/year-steps/year-steps.component';
import { DayBloodOxygenComponent } from './blood-oxygen/day-blood-oxygen/day-blood-oxygen.component';
import { WeekBloodOxygenComponent } from './blood-oxygen/week-blood-oxygen/week-blood-oxygen.component';
import { MonthBloodOxygenComponent } from './blood-oxygen/month-blood-oxygen/month-blood-oxygen.component';
import { YearBloodOxygenComponent } from './blood-oxygen/year-blood-oxygen/year-blood-oxygen.component';
import { DayEnergyExpenditureComponent } from './energy-expenditure/day-energy-expenditure/day-energy-expenditure.component';
import { WeekEnergyExpenditureComponent } from './energy-expenditure/week-energy-expenditure/week-energy-expenditure.component';
import { MonthEnergyExpenditureComponent } from './energy-expenditure/month-energy-expenditure/month-energy-expenditure.component';
import { YearEnergyExpenditureComponent } from './energy-expenditure/year-energy-expenditure/year-energy-expenditure.component';
import { DayStressComponent } from './stress/day-stress/day-stress.component';
import { WeekStressComponent } from './stress/week-stress/week-stress.component';
import { MonthStressComponent } from './stress/month-stress/month-stress.component';
import { YearStressComponent } from './stress/year-stress/year-stress.component';
import { DayWeightComponent } from './weight/day-weight/day-weight.component';
import { MonthWeightComponent } from './weight/month-weight/month-weight.component';
import { WeekWeightComponent } from './weight/week-weight/week-weight.component';
import { YearWeightComponent } from './weight/year-weight/year-weight.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecommendetionStressComponent } from './recommendetions-stress/recommendetion-stress/recommendetion-stress.component';
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
    YearheartrateComponent,
    YearSleepComponent,
    YearStepsComponent,
    DayBloodOxygenComponent,
    WeekBloodOxygenComponent,
    MonthBloodOxygenComponent,
    YearBloodOxygenComponent,
    DayEnergyExpenditureComponent,
    WeekEnergyExpenditureComponent,
    MonthEnergyExpenditureComponent,
    YearEnergyExpenditureComponent,
    DayStressComponent,
    WeekStressComponent,
    MonthStressComponent,
    YearStressComponent,
    DayWeightComponent,
    MonthWeightComponent,
    WeekWeightComponent,
    YearWeightComponent,
    RecommendetionStressComponent
  ],
  imports: [
    // CommonModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    NgSelect2Module,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    //Login2Module,
    RouterModule.forRoot(appRoutes, { useHash: true, onSameUrlNavigation: 'reload' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
