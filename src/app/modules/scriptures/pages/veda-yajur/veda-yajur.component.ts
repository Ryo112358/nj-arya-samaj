import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-veda-yajur',
  templateUrl: './veda-yajur.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-yajur.component.css'
  ]
})
export class VedaYajurComponent implements OnInit, OnDestroy {

  yajur: any[];

  private $jsonObs: Subscription;
  private json: string = 'veda-yajur.json';

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.yajur = data["scripture"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
