import { Injectable } from '@angular/core';


import { LibraryService } from '../library.service';

@Injectable()
export class ArticlesResolver   {

  constructor(private libraryService: LibraryService) { }

  resolve(): Promise<any> | boolean {

    return this.libraryService.getArticles().toPromise().then(data => {
      if(data) {
        return data;
      }
      else {
        return false;
      }
    });
  }
  
}