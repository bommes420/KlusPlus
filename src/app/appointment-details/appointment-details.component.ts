import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import {appointments} from '../appointments';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit {
  appointment: any;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.appointment = appointments[+params.get('appointmentTitle')];
    });
  }

}
