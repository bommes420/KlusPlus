import { Component, OnInit } from '@angular/core';
import {DIYtips} from '../DIYtips';

@Component({
  selector: 'app-do-it-yourself',
  templateUrl: './do-it-yourself.component.html',
  styleUrls: ['./do-it-yourself.component.scss']
})
export class DoItYourselfComponent implements OnInit {
  DIYtips = DIYtips;
  constructor() { }

  ngOnInit() {
  }

}
