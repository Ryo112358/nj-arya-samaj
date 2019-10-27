import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.css']
})
export class PrayersComponent implements OnInit {
  
  json: string = 'prayers.json';

  prayers: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.prayers = data["prayers"];
    });
  }

}
