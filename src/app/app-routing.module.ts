import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2Component } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DeviceComponent } from './devices/devices.component';
import { AdddeviceComponent } from './devices/adddevice/adddevice.component';
import { InsidedeviceComponent } from './devices/insidedevice/insidedevice.component';
import { DaystepsComponent } from './steps/day-steps/daysteps.component';
import { WeekstepsComponent } from './steps/week-steps/weeksteps.component';
import { MonthstepsComponent } from './steps/month-steps/monthsteps.component';
import { YearStepsComponent } from './steps/year-steps/year-steps.component';
import { DaysleepComponent } from './sleep/day-sleep/daysleep.component';
import { WeeksleepComponent } from './sleep/week-sleep/weeksleep.component';
import { MonthsleepComponent } from './sleep/month-sleep/monthsleep.component';
import { YearSleepComponent } from './sleep/year-sleep/year-sleep.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { DayheartrateComponent } from './heartrate/day-heartrate/dayheartrate.component';
import { WeekheartrateComponent } from './heartrate/week-heartrate/weekheartrate.component';
import { MonthheartrateComponent } from './heartrate/month-heartrate/monthheartrate.component';
import { YearheartrateComponent } from './heartrate/year-heartrate/yearheartrate.component';
import { DayBloodOxygenComponent } from './blood-oxygen/day-blood-oxygen/day-blood-oxygen.component';
import { WeekBloodOxygenComponent } from './blood-oxygen/week-blood-oxygen/week-blood-oxygen.component';
import { MonthBloodOxygenComponent } from './blood-oxygen/month-blood-oxygen/month-blood-oxygen.component';
import { YearBloodOxygenComponent } from './blood-oxygen/year-blood-oxygen/year-blood-oxygen.component';
import { DayEnergyExpenditureComponent } from './energy-expenditure/day-energy-expenditure/day-energy-expenditure.component';
import { MonthEnergyExpenditureComponent } from './energy-expenditure/month-energy-expenditure/month-energy-expenditure.component';
import { WeekEnergyExpenditureComponent } from './energy-expenditure/week-energy-expenditure/week-energy-expenditure.component';
import { YearEnergyExpenditureComponent } from './energy-expenditure/year-energy-expenditure/year-energy-expenditure.component';
import { DayStressComponent } from './stress/day-stress/day-stress.component';
import { WeekStressComponent } from './stress/week-stress/week-stress.component';
import { MonthStressComponent } from './stress/month-stress/month-stress.component';
import { YearStressComponent } from './stress/year-stress/year-stress.component';
import { DayWeightComponent } from './weight/day-weight/day-weight.component';
import { MonthWeightComponent } from './weight/month-weight/month-weight.component';
import { WeekWeightComponent } from './weight/week-weight/week-weight.component';
import { YearWeightComponent } from './weight/year-weight/year-weight.component';
import { RecommendetionStressComponent } from './recommendetions-stress/recommendetion-stress/recommendetion-stress.component';

const routes: Routes = [
  { path: 'login', component: Login2Component },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'devices', component: DeviceComponent },
  { path: 'adddevices', component: AdddeviceComponent },
  { path: 'insidedevices', component: InsidedeviceComponent },
  { path: 'day-steps', component: DaystepsComponent },
  { path: 'week-steps', component: WeekstepsComponent },
  { path: 'month-steps', component: MonthstepsComponent },
  { path: 'year-steps', component: YearStepsComponent },
  { path: 'day-sleep', component: DaysleepComponent },
  { path: 'week-sleep', component: WeeksleepComponent },
  { path: 'month-sleep', component: MonthsleepComponent },
  { path: 'year-sleep', component: YearSleepComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'day-heartrate', component: DayheartrateComponent },
  { path: 'week-heartrate', component: WeekheartrateComponent },
  { path: 'month-heartrate', component: MonthheartrateComponent },
  { path: 'year-heartrate', component: YearheartrateComponent },
  { path: 'day-oxygen', component: DayBloodOxygenComponent },
  { path: 'week-oxygen', component: WeekBloodOxygenComponent },
  { path: 'month-oxygen', component: MonthBloodOxygenComponent },
  { path: 'year-oxygen', component: YearBloodOxygenComponent },
  { path: 'day-energy', component: DayEnergyExpenditureComponent },
  { path: 'month-energy', component: MonthEnergyExpenditureComponent },
  { path: 'week-energy', component: WeekEnergyExpenditureComponent },
  { path: 'year-energy', component: YearEnergyExpenditureComponent },
  { path: 'day-stress', component: DayStressComponent },
  { path: 'month-stress', component: MonthStressComponent },
  { path: 'week-stress', component: WeekStressComponent },
  { path: 'year-stress', component: YearStressComponent },
  { path: 'recommand-stress', component: RecommendetionStressComponent },
  { path: 'day-weight', component: DayWeightComponent },
  { path: 'month-weight', component: MonthWeightComponent },
  { path: 'week-weight', component: WeekWeightComponent },
  { path: 'year-weight', component: YearWeightComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
