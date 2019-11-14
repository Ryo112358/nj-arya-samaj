import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nj-arya-samaj';

  // version: string = "whirlpool";

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
