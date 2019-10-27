import { Component, OnInit } from '@angular/core';
import { JsonLoaderService } from 'app/core/services/json-loader.service';
// import libraryJSON from '../../../../../assets/data/library.json';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {
    this.jsonLoaderService.getJSON('assets/data/library.json').subscribe(data => {
      this.articles = data["articles"];
    });
    // this.articles = libraryJSON.articles;
  }

  ngOnInit() {}

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
