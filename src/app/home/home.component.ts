import { Component, OnInit } from '@angular/core';
import {appointments} from '../appointments';
import {closedappointments} from '../appointments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShow = false;
  appointments = appointments;
  closedappointments = closedappointments;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor() { }

  ngOnInit() {
  }

}
