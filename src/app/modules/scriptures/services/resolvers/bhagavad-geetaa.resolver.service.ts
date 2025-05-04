import { Injectable } from '@angular/core';


import { ScripturesService } from '../scriptures.service';

@Injectable()
export class BhagavadGeetaaResolver   {

  constructor(private scripturesService: ScripturesService) { }

  resolve(): Promise<any> | boolean {

    return this.scripturesService.getBhagavadGeetaa().toPromise().then(data => {
      if(data) {
        return data;
      }
      else {
        return false;
      }
    });
  }
  
}