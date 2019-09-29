import { Component, OnInit } from '@angular/core';

import temple_events from '../../assets/docs/temple-events.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any[] = null;

  constructor() {
    this.events = temple_events.events;
  }

  ngOnInit() {
  }

}
