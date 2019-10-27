import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';


@Component({
  selector: 'app-bhajans',
  templateUrl: './bhajans.component.html',
  styleUrls: ['./bhajans.component.css']
})
export class BhajansComponent implements OnInit {

  json: string = 'bhajans.json';

  bhajans: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.bhajans = data["bhajans"];
    });
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
