import { Component, OnInit } from '@angular/core';
import bhajansJSON from '../../../../../assets/data/bhajans.json';

@Component({
  selector: 'app-bhajans',
  templateUrl: './bhajans.component.html',
  styleUrls: ['./bhajans.component.css']
})
export class BhajansComponent implements OnInit {

  bhajans: any[];

  constructor() {
    this.bhajans = bhajansJSON.bhajans;
  }

  ngOnInit() {
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}