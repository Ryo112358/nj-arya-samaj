import { NgModule } from '@angular/core';

/* -------------------------- Custom Modules -------------------------- */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';

/* ------------------------ Root Component ------------------------ */
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
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
