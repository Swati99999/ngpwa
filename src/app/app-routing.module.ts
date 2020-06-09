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
import { DaysleepComponent } from './sleep/day-sleep/daysleep.component';
import { WeeksleepComponent } from './sleep/week-sleep/weeksleep.component';
import { MonthsleepComponent } from './sleep/month-sleep/monthsleep.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { DayheartrateComponent } from './heartrate/day-heartrate/dayheartrate.component';
import { WeekheartrateComponent } from './heartrate/week-heartrate/weekheartrate.component';
import { MonthheartrateComponent } from './heartrate/month-heartrate/monthheartrate.component';
import { YearheartrateComponent } from './heartrate/year-heartrate/yearheartrate.component';

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
  { path: 'day-sleep', component: DaysleepComponent },
  { path: 'week-sleep', component: WeeksleepComponent },
  { path: 'month-sleep', component: MonthsleepComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'day-heartrate', component: DayheartrateComponent },
  { path: 'week-heartrate', component: WeekheartrateComponent },
  { path: 'month-heartrate', component: MonthheartrateComponent },
  { path: 'year-heartrate', component: YearheartrateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
