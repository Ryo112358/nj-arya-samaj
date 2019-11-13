import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TableResourceComponent } from './components/table-resource/table-resource.component';

@NgModule({
  declarations: [
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
    TableResourceComponent
  ]
})
export class SharedModule { }
