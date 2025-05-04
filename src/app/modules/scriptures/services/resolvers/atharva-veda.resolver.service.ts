import { Injectable } from '@angular/core';


import { ScripturesService } from '../scriptures.service';

@Injectable()
export class AtharvaVedaResolver   {

  constructor(private scripturesService: ScripturesService) { }

  resolve(): Promise<any> | boolean {

    return this.scripturesService.getAtharvaVeda().toPromise().then(data => {
      if(data) {
        return data;
      }
      else {
        return false;
      }
    });
  }
  
}