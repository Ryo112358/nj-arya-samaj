import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { FutureDateFilterPipe, PastDateFilterPipe } from 'app/shared/pipes';

import { clone } from 'app/shared/utility';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private $route: Subscription;

  today: Date;

  dateFormat: string;
  eventGroups: any[];

  upcomingGroups: any[];
  pastGroups: any[];

  constructor(
    private route: ActivatedRoute,
    private filterForFutureDates: FutureDateFilterPipe,
    private filterForPastDates: PastDateFilterPipe
  ) {}

  ngOnInit() {
    this.today = new Date();
    
    this.$route = this.route.data.subscribe(data => {
      this.dateFormat = data["resolvedData"]["pipeDateFormat"];
      this.eventGroups = data["resolvedData"]["eventGroups"].filter(this.displayEventGroup);

      this.upcomingGroups = this.setUpcomingGroups(this.eventGroups);
      this.pastGroups = this.setPastGroups(this.eventGroups);
    });
  }

  displayEventGroup(element, index, array): boolean {
    // Check if "display" value for group in JSON is true/false
    return element["display"];
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  setUpcomingGroups(baseEventGroups) {
    let newEventGroups = [];

    for(let eventGroup of clone(baseEventGroups)) {

      eventGroup.events = this.filterForFutureDates.transform(eventGroup.events, this.today);

      console.log();

      if(eventGroup.events.length > 0) {
        newEventGroups.push(eventGroup);
      }

    }

    // console.log("Base: ", this.eventGroups);
    // console.log("Future: ", newEventGroups);

    return newEventGroups;
  }

  setPastGroups(baseEventGroups) {
    let newEventGroups = [];

    for(let eventGroup of clone(baseEventGroups)) {

      eventGroup.events = this.filterForPastDates.transform(eventGroup.events, this.today);

      console.log();

      if(eventGroup.events.length > 0) {
        newEventGroups.push(eventGroup);
      }

    }

    // console.log("Base: ", this.eventGroups);
    // console.log("Past: ", newEventGroups);

    return newEventGroups;
  }

}
