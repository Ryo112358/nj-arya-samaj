import { NgModule, Optional, SkipSelf } from '@angular/core';

import { JsonLoaderService } from './services';
import { GeneralService } from './services';
 
@NgModule({
  declarations: [],
  imports: [],
  providers: [
    JsonLoaderService, GeneralService
  ]
})
export class CoreModule { 
 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("Import core module ONLY in the root module")
    }
  }
}