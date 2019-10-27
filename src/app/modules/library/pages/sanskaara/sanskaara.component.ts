import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-sanskaara',
  templateUrl: './sanskaara.component.html',
  styleUrls: ['./sanskaara.component.css']
})
export class SanskaaraComponent implements OnInit {
  
  json: string = 'sanskaaras.json';

  sanskaaras: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.sanskaaras = data["sanskaaras"];
    });
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
