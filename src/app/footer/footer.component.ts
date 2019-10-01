import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() bannerPrefChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleBanner() {
    this.bannerPrefChanged.emit(true);
  }

}
