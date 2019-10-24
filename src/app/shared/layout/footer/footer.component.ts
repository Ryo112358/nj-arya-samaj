import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() bannerPrefChanged: EventEmitter<boolean> = new EventEmitter();

  location: string;
  locationFull: string;

  constructor() {
    this.location = "https://www.google.com/maps/place/191+Woodlawn+Ave,+Jersey+City,+NJ+07305";
    this.locationFull = "https://www.google.com/maps/place/191+Woodlawn+Ave,+Jersey+City,+NJ+07305/@40.7041371,-74.090188,17z";
  }

  ngOnInit() {
  }

  toggleBanner() {
    this.bannerPrefChanged.emit(true);
  }

}
