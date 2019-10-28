import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-bhajans',
  templateUrl: './bhajans.component.html',
  styleUrls: ['./bhajans.component.css']
})
export class BhajansComponent implements OnInit, OnDestroy {

  private $jsonObs: Subscription;

  private json: string = 'bhajans.json';

  private bhajans: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.bhajans = data["bhajans"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
