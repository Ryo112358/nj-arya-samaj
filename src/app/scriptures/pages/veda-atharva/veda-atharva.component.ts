import { Component, OnInit } from '@angular/core';
import atharvaJSON from '../../../../assets/data/scriptures/veda-atharva.json';

@Component({
  selector: 'app-veda-atharva',
  templateUrl: './veda-atharva.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-atharva.component.css'
  ]
})
export class VedaAtharvaComponent implements OnInit {

  atharva: any[];

  constructor() {
    this.atharva = atharvaJSON.scripture;
  }

  ngOnInit() {
  }

  generateTitle(section) {
    return section["kaanda"] + "." + section["sukta"];
  }

}
