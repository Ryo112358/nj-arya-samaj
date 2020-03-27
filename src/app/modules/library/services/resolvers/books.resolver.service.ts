import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { LibraryService } from '../library.service';

@Injectable()
export class BooksResolver implements Resolve<any>  {

  constructor(private libraryService: LibraryService) { }

  resolve(): Promise<any> | boolean {

    return this.libraryService.getBooks().toPromise().then(data => {
      if(data) {
        return data;
      }
      else {
        return false;
      }
    });
  }
  
}