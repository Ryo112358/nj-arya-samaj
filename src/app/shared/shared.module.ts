import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavigationBarComponent, FooterComponent, PageNotFoundComponent } from './layout';
import { DonateViaPaypalComponent } from './layout/donate-via-paypal/donate-via-paypal.component';
import { SubFooterComponent } from './layout/footer/sub-footer/sub-footer.component';
import { TableResourceComponent } from './components/table-resource/table-resource.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    FooterComponent,
    SubFooterComponent,
    DonateViaPaypalComponent,
    PageNotFoundComponent,
    TableResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavigationBarComponent, FooterComponent, TableResourceComponent
  ]
})
export class SharedModule { }
