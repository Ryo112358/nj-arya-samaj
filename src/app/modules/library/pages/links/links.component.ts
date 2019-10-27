import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  
  json: string = 'library.json';

  links: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {
  }

  ngOnInit() {
    const jsonPath = environment.siteDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.links = data["links"];
    });
  }

}
