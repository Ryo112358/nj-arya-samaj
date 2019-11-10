import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { GeneralService } from 'app/core/services';

import { ExecutiveBody } from 'app/core/models';

@Component({
  selector: 'app-executive-body',
  templateUrl: './executive-body.component.html',
  styleUrls: ['./executive-body.component.css']
})
export class ExecutiveBodyComponent implements OnInit, OnDestroy {

  executiveBody: ExecutiveBody;

  private $route: Subscription;
  // private $jsonObs: Subscription;

  constructor(
    private _generalService: GeneralService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.$route = this.route.data.subscribe(data => {
      this.executiveBody = data["resolvedData"];
    });
    
    // this.$jsonObs = this.generalService.getExecutiveBody().subscribe(data => {
    //   this.executiveBody = data;
    //   console.log(this.executiveBody);
    // });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

}
