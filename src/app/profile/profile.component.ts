import { Component, OnInit } from '@angular/core';
import {customerdatas} from '../customerdatas';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  customerdatas = customerdatas;
  constructor() { }

  ngOnInit() {
  }

}
