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

  public getExecutiveBody(): Observable<ExecutiveBody> {
    return this.http.get<ExecutiveBody>(environment.generalData).pipe(
      map(data => new ExecutiveBody().deserialize(data["executiveBody"]))
    );
  }
}
