import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-veda-saama',
  templateUrl: './veda-saama.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-saama.component.css'
  ]
})
export class VedaSaamaComponent implements OnInit, OnDestroy {

  private $jsonObs: Subscription;
  
  private json: string = 'veda-saama.json';

  private saama: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.saama = data["scripture"];
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
