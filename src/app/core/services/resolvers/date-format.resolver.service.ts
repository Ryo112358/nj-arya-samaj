import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { GeneralService } from 'app/core/services';

@Injectable()
export class DateFormatResolver implements Resolve<any>  {

  constructor(
    private generalService: GeneralService
  ) { }

  resolve(): Promise<any> | boolean {

    return this.generalService.getEvents().toPromise().then(data => {
      if(data) {        
        return data["pipeDateFormat"];
      }
      else { return false; }
    });
  }
  
}
