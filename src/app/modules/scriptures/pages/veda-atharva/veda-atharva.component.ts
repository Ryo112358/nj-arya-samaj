import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-veda-atharva',
  templateUrl: './veda-atharva.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-atharva.component.css'
  ]
})
export class VedaAtharvaComponent implements OnInit, OnDestroy {

  private $jsonObs: Subscription;
  
  private json: string = 'veda-atharva.json';

  private atharva: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.atharva = data["scripture"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

  generateTitle(section) {
    return section["kaanda"] + "." + section["sukta"];
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
