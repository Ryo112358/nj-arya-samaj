import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { GeneralService } from 'app/core/services';

import { FutureDateFilterPipe } from 'app/shared/pipes';

@Injectable()
export class UpcomingEventsResolver implements Resolve<any>  {

  constructor(
    private generalService: GeneralService,
    private filterForFutureDates: FutureDateFilterPipe
  ) { }

  resolve(): Promise<any> | boolean {

    return this.generalService.getEventGroups().toPromise().then((data: Array<any>) => {
      if(data) {

        let eventGroups = data.filter(this.displayEventGroup);
        
        return this.findUpcomingEventGroups(eventGroups);
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

    for(let eventGroup of baseEventGroups) {

      eventGroup.events = this.filterForFutureDates.transform(eventGroup.events, today);

      if(eventGroup.events.length > 0) {
        newEventGroups.push(eventGroup);
      }

    }

    return newEventGroups;
  }
  
}
