import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';

import { NavigationBarComponent, FooterComponent, PageNotFoundComponent } from './layout';

@NgModule({
  declarations: [ NavigationBarComponent, FooterComponent, PageNotFoundComponent ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NavigationBarComponent, FooterComponent, PageNotFoundComponent
  ]
})
export class SharedModule { }