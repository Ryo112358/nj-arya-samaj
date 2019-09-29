import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { ScripturesModule } from './scriptures/scriptures.module';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';

/* -------------------------- Pages -------------------------- */
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { LinksComponent } from './pages/links/links.component';
import { PrayersComponent } from './pages/prayers/prayers.component';
import { BhajansComponent } from './pages/bhajans/bhajans.component';
import { SanskaaraComponent } from './pages/sanskaara/sanskaara.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, NavigationBarComponent, LibraryComponent, LinksComponent, PrayersComponent, BhajansComponent, SanskaaraComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ScripturesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
