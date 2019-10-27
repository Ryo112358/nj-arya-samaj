import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* -------------------------- Custom Modules -------------------------- */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';

/* -------------------------- Root Component -------------------------- */
import { AppComponent } from './app.component';

/* -------------------------- Pages -------------------------- */
import { HomeComponent } from './pages/home/home.component';
import { ExecutiveBodyComponent } from './pages/executive-body/executive-body.component';
import { FuturePlansComponent } from './pages/future-plans/future-plans.component';
import { HumanitarianWorkComponent } from './pages/humanitarian-work/humanitarian-work.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, ExecutiveBodyComponent, FuturePlansComponent, HumanitarianWorkComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
