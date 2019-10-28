import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  
  articles: any[];

  private $jsonObs: Subscription;
  private json: string = 'library.json';

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.articles = data["articles"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
