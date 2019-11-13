import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableResourceComponent } from './components';

import { FutureDateFilterPipe } from './pipes';
import { PastDateFilterPipe } from './pipes/past-date-filter.pipe';

@NgModule({
  declarations: [
    TableResourceComponent,
    FutureDateFilterPipe,
    PastDateFilterPipe
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
    PastDateFilterPipe
  ],
  providers: [
    FutureDateFilterPipe,
    PastDateFilterPipe
  ]
})
export class SharedModule { }
