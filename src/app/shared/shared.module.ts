import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';

import { NavigationBarComponent, FooterComponent, PageNotFoundComponent } from './layout';
import { DonateViaPaypalComponent } from './layout/donate-via-paypal/donate-via-paypal.component';
import { SubFooterComponent } from './layout/footer/sub-footer/sub-footer.component';

@NgModule({
  declarations: [ NavigationBarComponent, FooterComponent, PageNotFoundComponent, DonateViaPaypalComponent, SubFooterComponent ],
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
    HttpClientModule,
    NavigationBarComponent, FooterComponent
  ]
})
export class SharedModule { }
