import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable()
export class ScripturesService {

  constructor(private http: HttpClient) {}

  public getBhagavadGeetaa(): Observable<Object> {
    return this.http.get<Object>(environment.geetaaJSON).pipe(
      map(data => data["scripture"])
    );
  }

  public getUpanishad(): Observable<Object> {
    return this.http.get<Object>(environment.upanishadJSON).pipe(
      map(data => data["scripture"])
    );
  }

  public getAtharvaVeda(): Observable<Object> {
    return this.http.get<Object>(environment.atharvaVedaJSON).pipe(
      map(data => data["scripture"])
    );
  }

  public getRigVeda(): Observable<Object> {
    return this.http.get<Object>(environment.rigVedaJSON).pipe(
      map(data => data["scripture"])
    );
  }

  public getSaamaVeda(): Observable<Object> {
    return this.http.get<Object>(environment.saamaVedaJSON).pipe(
      map(data => data["scripture"])
    );
  }

  public getYajurVeda(): Observable<Object> {
    return this.http.get<Object>(environment.yajurVedaJSON).pipe(
      map(data => data["scripture"])
    );
  }
}
