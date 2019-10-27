import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  json: string = 'library.json';
  
  articles: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.articles = data["articles"];
    });
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
