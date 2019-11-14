import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { GeneralService } from 'app/core/services';

import { PastDateFilterPipe, FutureDateFilterPipe } from 'app/shared/pipes';

import { clone } from 'app/shared/utility';

@Injectable()
export class AllEventsDataResolver implements Resolve<any>  {

  constructor(
    private generalService: GeneralService,
    private filterForPastDates: PastDateFilterPipe,
    private filterForFutureDates: FutureDateFilterPipe
  ) { }

  resolve(): Promise<any> | boolean {

    return this.generalService.getEventsData().toPromise().then(data => {
      if(data) {

        let eventGroups = data["eventGroups"].filter(this.displayEventGroup);

        data["pastEventGroups"] = this.findPastEventGroups(eventGroups);
        data["upcomingEventGroups"] = this.findUpcomingEventGroups(eventGroups);

        return data;
      }
      else { return false; }
    });
  }

  displayEventGroup(element, index, array): boolean {
    // Check if "display" value for group in JSON is true/false
    return element["display"];
  }

  findUpcomingEventGroups(baseEventGroups) {
    const today = new Date();

    let newEventGroups = [];

    for(let eventGroup of clone(baseEventGroups)) {

      eventGroup.events = this.filterForFutureDates.transform(eventGroup.events, today);

      if(eventGroup.events.length > 0) {
        newEventGroups.push(eventGroup);
      }

    }

    return newEventGroups;
  }

  findPastEventGroups(baseEventGroups) {
    const today = new Date();

    let newEventGroups = [];

    for(let eventGroup of clone(baseEventGroups)) {

      eventGroup.events = this.filterForPastDates.transform(eventGroup.events, today);

      if(eventGroup.events.length > 0) {
        newEventGroups.push(eventGroup);
      }

    }

    return newEventGroups;
  }
  
}
