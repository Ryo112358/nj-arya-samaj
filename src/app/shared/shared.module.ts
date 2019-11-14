import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableResourceComponent } from './components';

import { FutureDateFilterPipe } from './pipes';
import { PastDateFilterPipe } from './pipes/past-date-filter.pipe';
import { DateToSafariFormatPipe } from './pipes/date-to-safari-format.pipe';

@NgModule({
  declarations: [
    TableResourceComponent,
    FutureDateFilterPipe,
    PastDateFilterPipe,
    DateToSafariFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TableResourceComponent,
    FutureDateFilterPipe,
    PastDateFilterPipe,
    DateToSafariFormatPipe
  ],
  providers: [
    FutureDateFilterPipe,
    PastDateFilterPipe,
    DateToSafariFormatPipe
  ]
})
export class SharedModule { }
