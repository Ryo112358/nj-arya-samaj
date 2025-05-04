import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sub-footer',
    templateUrl: './sub-footer.component.html',
    styleUrls: ['./sub-footer.component.scss'],
    standalone: false
})
export class SubFooterComponent implements OnInit {

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
