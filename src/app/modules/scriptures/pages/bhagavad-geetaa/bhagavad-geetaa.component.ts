import { Component, OnInit } from '@angular/core';
import geetaaJSON from '../../../../../assets/data/scriptures/geetaa.json';

@Component({
  selector: 'app-bhagavad-geetaa',
  templateUrl: './bhagavad-geetaa.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './bhagavad-geetaa.component.css'
  ]
})
export class BhagavadGeetaaComponent implements OnInit {

  geetaa: any[];

  constructor() {
    this.geetaa = geetaaJSON.scripture;
  }

  ngOnInit() {
  }

}
