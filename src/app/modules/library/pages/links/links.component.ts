import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit, OnDestroy {

  private $jsonObs: Subscription;
  
  private json: string = 'library.json';

  private links: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {
  }

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.links = data["links"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

}
