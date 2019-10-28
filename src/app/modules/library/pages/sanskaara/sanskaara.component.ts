import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-sanskaara',
  templateUrl: './sanskaara.component.html',
  styleUrls: ['./sanskaara.component.css']
})
export class SanskaaraComponent implements OnInit, OnDestroy {

  sanskaaras: any[];

  private $jsonObs: Subscription;
  private json: string = 'sanskaaras.json';

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.sanskaaras = data["sanskaaras"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
