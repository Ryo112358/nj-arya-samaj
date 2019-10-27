import { Component, OnInit } from '@angular/core';

import { JsonLoaderService } from 'app/core/services/json-loader.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  json: string = 'library.json';
  
  articles: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {
    const jsonPath = environment.siteDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.articles = data["articles"];
    });
  }

  ngOnInit() {}

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
