import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import rigJSON from '../../../../../../assets/data/scriptures/veda-rig.json';

@Component({
  selector: 'mandala',
  templateUrl: './mandala.component.html',
  styleUrls: [
    '../../../scriptures.module.css',
    './mandala.component.css'
  ]
})
export class MandalaComponent implements OnInit {

  @Input('mandalaInfo') mandala;
  mandalaId: number;

  routeSubsription: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSubsription = this._ActivatedRoute.params.subscribe(params => { 
      this.mandalaId = params['mandalaId'];
      this.mandala = rigJSON.mandalas[this.mandalaId-1];
    });
  }

  ngOnDestroy() {
    this.routeSubsription.unsubscribe();
  }

  generateTitle(section) {
    return this.mandala["id"] + "." + section["sukta"];
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
