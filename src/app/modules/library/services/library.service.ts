import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable()
export class LibraryService {

  constructor(private http: HttpClient) {}

  public getArticles(): Observable<Object> {
    return this.http.get<Object>(environment.libraryJSON).pipe(
      map(data => data["articles"])
    );
  }

  public getPrayers(): Observable<Object> {
    return this.http.get<Object>(environment.prayersJSON).pipe(
      map(data => data["prayers"])
    );
  }

  public getBhajans(): Observable<Object> {
    return this.http.get<Object>(environment.bhajansJSON).pipe(
      map(data => data["bhajans"])
    );
  }

  public getSanskaaras(): Observable<Object> {
    return this.http.get<Object>(environment.sanskaarasJSON).pipe(
      map(data => data["sanskaaras"])
    );
  }

  public getLinks(): Observable<Object> {
    return this.http.get<Object>(environment.libraryJSON).pipe(
      map(data => data["links"])
    );
  }

  public getBooks(): Observable<Object> {
    return this.http.get<Object>(environment.booksJSON).pipe(
      map(data => data["books"])
    );
  }
  
}
