import { Component, OnInit } from '@angular/core';
import yajurJSON from '../../../../../assets/data/scriptures/veda-yajur.json';

@Component({
  selector: 'app-veda-yajur',
  templateUrl: './veda-yajur.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-yajur.component.css'
  ]
})
export class VedaYajurComponent implements OnInit {

  yajur: any[];

  constructor() {
    this.yajur = yajurJSON.scripture;
  }

  ngOnInit() {
  }

}
