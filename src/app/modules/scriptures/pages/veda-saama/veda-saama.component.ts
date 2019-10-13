import { Component, OnInit } from '@angular/core';
import saamaJSON from '../../../../../assets/data/scriptures/veda-saama.json';

@Component({
  selector: 'app-veda-saama',
  templateUrl: './veda-saama.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-saama.component.css'
  ]
})
export class VedaSaamaComponent implements OnInit {

  saama: any[];

  constructor() {
    this.saama = saamaJSON.scripture;
  }

  ngOnInit() {
  }

}
