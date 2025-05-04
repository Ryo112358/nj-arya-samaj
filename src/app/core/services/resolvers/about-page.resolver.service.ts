import { Injectable } from '@angular/core';


import { GeneralService } from 'app/core/services';

@Injectable()
export class AboutPageResolver   {

  constructor(private generalService: GeneralService) { }

  resolve(): Promise<any> | boolean {

    return this.generalService.getExecutiveBody().toPromise().then(data => {
      if(data) {
        return data;
      }
      else {
        return false;
      }
    });
  }
  
}
