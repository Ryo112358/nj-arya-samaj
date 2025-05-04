import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ExecutiveBody } from 'app/core/models';

@Component({
    selector: 'app-executive-body',
    templateUrl: './executive-body.component.html',
    styleUrls: ['./executive-body.component.scss'],
    standalone: false
})
export class ExecutiveBodyComponent implements OnInit, OnDestroy {

  executiveBody: ExecutiveBody;

  private $route: Subscription;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.$route = this.route.data.subscribe(data => {
      this.executiveBody = data["resolvedData"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

}
