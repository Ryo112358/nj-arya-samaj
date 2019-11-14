import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

import { ExecutiveBody } from 'app/core/models';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  public getEventGroups(): Observable<Object> {
    return this.http.get<Object>(environment.eventsJSON).pipe(
      map(data => data["eventGroups"])
    );
  }

  public getDateFormat(): Observable<Object> {
    return this.http.get<Object>(environment.eventsJSON).pipe(
      map(data => data["pipeDateFormat"])
    );
  }

  public getHumanitarianWork(): Observable<Object> {
    return this.http.get<Object>(environment.generalJSON).pipe(
      map(data => data["humanitarianWork"])
    );
  }

  public getExecutiveBody(): Observable<ExecutiveBody> {
    return this.http.get<ExecutiveBody>(environment.generalJSON).pipe(
      map(data => new ExecutiveBody().deserialize(data["aboutUs"]["executiveBody"]))
    );
  }

}
