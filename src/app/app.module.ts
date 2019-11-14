import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';

import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatExpansionModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';

import { HomeComponent } from './home/home.component';
import { RequestReparationComponent } from './request-reparation/request-reparation.component';
import { ProfileComponent } from './profile/profile.component';
import { DoItYourselfComponent } from './do-it-yourself/do-it-yourself.component';

// const appRoutes: Routes = [
//   {path: 'File-request', component: 'appointmentsComponent'}
// ]

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentDetailsComponent,
    HomeComponent,
    RequestReparationComponent,
    ProfileComponent,
    DoItYourselfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
