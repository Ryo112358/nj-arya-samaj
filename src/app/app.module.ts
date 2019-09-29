import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { ScripturesModule } from './scriptures/scriptures.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LibraryComponent } from './library/library.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, NavigationBarComponent, LibraryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    PagesModule,
    ScripturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
