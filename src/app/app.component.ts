import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nj-arya-samaj';
  version = "1.6.12";

  prefShowBanner: boolean;

  constructor()  {
    this.prefShowBanner = true;
  }

  ngOnInit() {
    // console.log("Version:", this.version);
  }

  toggleBannerHandler() {
    this.prefShowBanner = !this.prefShowBanner;
  }
}
