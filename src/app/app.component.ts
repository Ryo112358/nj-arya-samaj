import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nj-arya-samaj';

  prefShowBanner: boolean;

  constructor()  {
    this.prefShowBanner = true;
  }

  toggleBannerHandler() {
    this.prefShowBanner = !this.prefShowBanner;
  }
}
