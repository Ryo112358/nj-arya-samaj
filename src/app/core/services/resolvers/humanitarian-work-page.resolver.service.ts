import { Injectable } from '@angular/core';


import { GeneralService } from 'app/core/services';

@Injectable()
export class HumanitarianWorkPageResolver   {

  constructor(private generalService: GeneralService) { }

  resolve(): Promise<any> | boolean {

    return this.generalService.getHumanitarianWork().toPromise().then(data => {
      if(data) {
        return data;
      }
      else {
        return false;
      }
    });
  }
  
}
