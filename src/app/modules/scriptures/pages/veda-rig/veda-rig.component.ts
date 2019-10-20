import { Component, OnInit } from '@angular/core';
import rigJSON from '../../../../../assets/data/scriptures/veda-rig.json';

@Component({
  selector: 'app-veda-rig',
  templateUrl: './veda-rig.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-rig.component.css'
  ]
})
export class VedaRigComponent implements OnInit {

  mandalas: any[];

  userSelection: number;

  constructor() {
    this.mandalas = rigJSON.mandalas;
    this.userSelection = 1;
  }

  ngOnInit() {
  }

  updateMandala(mandalaId: number) {
    this.userSelection = mandalaId;
  }

  showMandalaAsActive(index: number): boolean {
    return index === this.userSelection;
  }

}
