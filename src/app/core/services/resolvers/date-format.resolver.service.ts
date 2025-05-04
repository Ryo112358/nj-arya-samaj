import { Injectable } from '@angular/core';


import { GeneralService } from 'app/core/services';

@Injectable()
export class DateFormatResolver   {

  constructor(
    private generalService: GeneralService
  ) { }

  resolve(): Promise<any> | boolean {

    return this.generalService.getDateFormat().toPromise().then(data => {
      if(data) {        
        return data;
      }
      else { return false; }
    });
  }
  
}
