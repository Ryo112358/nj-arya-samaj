import { Component, OnInit } from '@angular/core';
import libraryJSON from '../../../../../assets/data/library.json';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: any[];

  constructor() {
    this.articles = libraryJSON.articles;
  }

  ngOnInit() {
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
