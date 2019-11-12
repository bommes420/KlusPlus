import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointmentDetailsComponent} from './appointment-details/appointment-details.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {RequestReparationComponent} from './request-reparation/request-reparation.component';

const routes: Routes = [
  {path: 'details', component: AppointmentDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'request-reparation', component: RequestReparationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'details/:appointmentTitle', component: AppointmentDetailsComponent},
      {path: 'request-reparation', component: RequestReparationComponent}
      ]),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
