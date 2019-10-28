import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
export class MandalaComponent implements OnInit, OnDestroy {

  @Input('mandalaInfo') mandala: any;
  mandalaId: number;

  private $route: Subscription;
  private json: string = 'veda-rig.json';

  constructor(
    private route: ActivatedRoute,
    private jsonLoaderService: JsonLoaderService
  ) {}

  ngOnInit() {

    // Load Mandala data from ActivatedRoute
    this.$route = this.route.data.subscribe(data => {
      this.mandala = data["mandala"];
      this.mandalaId = this.mandala["id"];
    });

    // Legacy method of loading Mandala; deprecated because template would try to read unfetched data
    // this.routeSubscription = this.route.params.subscribe(params => {
    //   this.mandalaId = +params['mandalaId'];
    //   this.loadMandalaFromJSON(this.mandalaId);
    // });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  generateTitle(section) {
    return this.mandala["id"] + "." + section["sukta"];
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

  // loadMandalaFromJSON(mandalaId: number) {
  //   const jsonPath = environment.scripturesDataPath + this.json;

  //   this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
  //     this.mandala = data["mandalas"][mandalaId-1];
  //     console.log(this.mandala);
  //   });
  // }

}
