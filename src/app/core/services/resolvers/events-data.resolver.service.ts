import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { GeneralService } from 'app/core/services';

import { PastDateFilterPipe } from 'app/shared/pipes';

@Injectable()
export class EventsDataResolver implements Resolve<any>  {

  constructor(
    private generalService: GeneralService,
    private filterForPastDates: PastDateFilterPipe
  ) { }

  resolve(): Promise<any> | boolean {

    return this.generalService.getEventsData().toPromise().then((data: Array<any>) => {
      if(data) {
        return data;
      }
      else { return false; }
    });
  }
  
}
