import { Component, OnInit } from '@angular/core';
import libraryJSON from '../../../../../assets/data/library.json';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: any[];

  constructor() {
    this.links = libraryJSON.links;
  }

  ngOnInit() {
  }

}
