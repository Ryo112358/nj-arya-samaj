import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Injectable()
export class MandalaResolve implements Resolve<any> {

  private json: string = 'veda-rig.json';

  constructor(
    private jsonLoaderService: JsonLoaderService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> | boolean {
    let mandalaId = +route.params['mandalaId'];

    const jsonPath = environment.scripturesDataPath + this.json;

    return this.jsonLoaderService.getJSON(jsonPath).toPromise().then(data => {
      if(data)
      {
        return data["mandalas"][mandalaId-1];
      }
      else {
        // this.router.navigate(['/dashboard']);
        return false;
      }
    });
  }
  
}