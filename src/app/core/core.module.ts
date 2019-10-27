import { NgModule, Optional, SkipSelf } from '@angular/core';
import { JsonLoaderService } from './services/json-loader.service';
 
@NgModule({
  declarations: [],
  imports: [],
  providers: [
    JsonLoaderService
  ]
})
export class CoreModule { 
 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("Import core module ONLY in the root module")
    }
  }
}