import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';
// import rigJSON from '../../../../../../assets/data/scriptures/veda-rig.json';

@Component({
  selector: 'mandala',
  templateUrl: './mandala.component.html',
  styleUrls: [
    '../../../scriptures.module.css',
    './mandala.component.css'
  ]
})
export class MandalaComponent implements OnInit {

  json: string = 'veda-rig.json';

  @Input('mandalaInfo') mandala: Object;
  mandalaId: number;

  routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private jsonLoaderService: JsonLoaderService
  ) {}

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.mandala = data["mandala"];
    });

    // console.log("Reached: ", this.mandala);

    // this.routeSubscription = this.route.params.subscribe(params => {
    //   // this.mandalaId = +params['mandalaId'];
    //   // this.mandala = rigJSON.mandalas[this.mandalaId-1];
    //   // this.loadMandalaFromJSON(this.mandalaId);
    //   // const jsonPath = environment.scripturesDataPath + this.json;

    //   // this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
    //   //   this.mandala = data["mandalas"][this.mandalaId-1];

    //   //   console.log(this.mandala);
    //   // });
    // });
  }

  loadMandalaFromJSON(mandalaId: number) {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.mandala = data["mandalas"][mandalaId-1];
      console.log(this.mandala);
    });
  }

  generateTitle(section) {
    return this.mandala["id"] + "." + section["sukta"];
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

  ngOnDestroy() {
    // this.routeSubscription.unsubscribe();
  }

}
