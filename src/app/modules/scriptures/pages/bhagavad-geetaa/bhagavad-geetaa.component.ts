import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-bhagavad-geetaa',
  templateUrl: './bhagavad-geetaa.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './bhagavad-geetaa.component.css'
  ]
})
export class BhagavadGeetaaComponent implements OnInit, OnDestroy {

  geetaa: any[];

  private $jsonObs: Subscription;
  private json: string = 'geetaa.json';

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.geetaa = data["scripture"];
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
