import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { GeneralService } from 'app/core/services';

@Injectable()
export class HumanitarianWorkPageResolver implements Resolve<any>  {

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
