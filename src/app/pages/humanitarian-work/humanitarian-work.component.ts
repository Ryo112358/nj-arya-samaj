import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-humanitarian-work',
  templateUrl: './humanitarian-work.component.html',
  styleUrls: ['./humanitarian-work.component.css']
})
export class HumanitarianWorkComponent implements OnInit, OnDestroy {

  summary: String[];

  private $jsonObs: Subscription;
  private json: string = 'general.json';

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.summary = data["humanitarianWork"]["summary"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

}
