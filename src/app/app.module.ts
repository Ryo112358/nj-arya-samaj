import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* -------------------------- Custom Modules -------------------------- */
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';

/* -------------------------- Root Component -------------------------- */
import { AppComponent } from './app.component';

/* -------------------------- Pages -------------------------- */
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { LinksComponent } from './pages/links/links.component';
import { PrayersComponent } from './pages/prayers/prayers.component';
import { BhajansComponent } from './pages/bhajans/bhajans.component';
import { SanskaaraComponent } from './pages/sanskaara/sanskaara.component';
import { ExecutiveBodyComponent } from './pages/executive-body/executive-body.component';
import { FuturePlansComponent } from './pages/future-plans/future-plans.component';
import { HumanitarianWorkComponent } from './pages/humanitarian-work/humanitarian-work.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, LibraryComponent, LinksComponent, PrayersComponent, BhajansComponent, SanskaaraComponent, ExecutiveBodyComponent, FuturePlansComponent, HumanitarianWorkComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule  // App Routing Module should be imported after any feature modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
