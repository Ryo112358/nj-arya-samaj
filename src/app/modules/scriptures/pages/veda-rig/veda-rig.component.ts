import { Component, OnInit } from '@angular/core';
// import rigJSON from '../../../../../assets/data/scriptures/veda-rig.json';

@Component({
  selector: 'app-veda-rig',
  templateUrl: './veda-rig.component.html',
  styleUrls: [
    '../../scriptures-module.shared.css',
    './veda-rig.component.css'
  ]
})
export class VedaRigComponent implements OnInit {

  mandalas: any[];

  constructor() {
    // this.mandalas = rigJSON.mandalas;
    this.mandalas = new Array(10);
  }

  ngOnInit() {}

}
