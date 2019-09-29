import { Component, OnInit } from '@angular/core';

import mandir_events from '../../../assets/data/mandir-events.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any[];

  constructor() {
    this.events = mandir_events.events;
  }

  ngOnInit() {
  }

}
