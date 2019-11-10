import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  events: any[];

  private $route: Subscription;
  // private $jsonObs: Subscription;
  // private json: string = 'mandir-events.json';

  constructor(
    private _jsonLoaderService: JsonLoaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.$route = this.route.data.subscribe(data => {
      this.events = data["resolvedData"];
    });
    // const jsonPath = environment.siteDataPath + this.json;

    // this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
    //   this.events = data["events"];
    // });
  }

  ngOnDestroy() {
    // this.$jsonObs.unsubscribe();
    this.$route.unsubscribe();
  }

}
