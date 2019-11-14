import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentDetailsComponent} from './appointment-details/appointment-details.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {RequestReparationComponent} from './request-reparation/request-reparation.component';
import {ProfileComponent} from './profile/profile.component';
import {DoItYourselfComponent} from './do-it-yourself/do-it-yourself.component';

const routes: Routes = [
  {path: 'details', component: AppointmentDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'request-reparation', component: RequestReparationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'do-it-yourself', component: DoItYourselfComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'details/:appointmentTitle', component: AppointmentDetailsComponent},
      {path: 'request-reparation', component: RequestReparationComponent},
      {path: 'do-it-yourself', component: DoItYourselfComponent},
      {path: 'profile', component: ProfileComponent}
      ]),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
