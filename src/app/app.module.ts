import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

/* -------------------------- Custom Modules -------------------------- */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';

/* -------------------------- Root Component -------------------------- */
import { AppComponent } from './app.component';


/* -------------------------- Layout -------------------------- */
import { NavigationBarComponent, FooterComponent, SubFooterComponent } from './pages/layout';
import { DonateViaPaypalComponent } from './pages/layout';

/* -------------------------- Pages -------------------------- */
import { HomeComponent } from './pages';
import { ExecutiveBodyComponent } from './pages';
import { FuturePlansComponent } from './pages';
import { HumanitarianWorkComponent } from './pages';
import { PageNotFoundComponent } from './pages';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    SubFooterComponent,
    DonateViaPaypalComponent,
    HomeComponent,
    ExecutiveBodyComponent,
    FuturePlansComponent,
    HumanitarianWorkComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    LoadingBarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
