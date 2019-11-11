import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ScripturesService } from '../scriptures.service';

@Injectable()
export class YajurVedaResolver implements Resolve<any>  {

  constructor(private scripturesService: ScripturesService) { }

  resolve(): Promise<any> | boolean {

    return this.scripturesService.getYajurVeda().toPromise().then(data => {
      if(data) {
        return data;
      }
      else {
        return false;
      }
    });
  }
  
}