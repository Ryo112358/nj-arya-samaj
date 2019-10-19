import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';

/* -------------------------- Pages -------------------------- */
import { LibraryHomeComponent } from './pages/library-home/library-home.component';
import { LinksComponent } from './pages/links/links.component';
import { PrayersComponent } from './pages/prayers/prayers.component';
import { BhajansComponent } from './pages/bhajans/bhajans.component';
import { SanskaaraComponent } from './pages/sanskaara/sanskaara.component';



@NgModule({
  declarations: [ LibraryHomeComponent, LinksComponent, PrayersComponent, BhajansComponent, SanskaaraComponent ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
