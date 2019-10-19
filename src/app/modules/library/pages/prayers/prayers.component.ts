import { Component, OnInit } from '@angular/core';
import prayersJSON from '../../../../../assets/data/prayers.json';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.css']
})
export class PrayersComponent implements OnInit {

  prayers: any[];

  constructor() {
    this.prayers = prayersJSON.prayers;
  }

  ngOnInit() {
  }

}
