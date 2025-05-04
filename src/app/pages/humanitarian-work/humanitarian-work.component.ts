import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-humanitarian-work',
  templateUrl: './humanitarian-work.component.html',
  styleUrls: ['./humanitarian-work.component.scss']
})
export class HumanitarianWorkComponent implements OnInit, OnDestroy {

  summary: String[];

  private $route: Subscription;
  // private $jsonObs: Subscription;
  // private json: string = 'general.json';

  constructor(
    private _jsonLoaderService: JsonLoaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.$route = this.route.data.subscribe(data => {
      this.summary = data["resolvedData"]["summary"];
    });
    // const jsonPath = environment.siteDataPath + this.json;

    // this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
    //   this.summary = data["humanitarianWork"]["summary"];
    // });
  }

  ngOnDestroy() {
    // this.$jsonObs.unsubscribe();
    this.$route.unsubscribe();
  }

}
