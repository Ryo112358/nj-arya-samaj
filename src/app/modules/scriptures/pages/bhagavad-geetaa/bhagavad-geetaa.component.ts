import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-bhagavad-geetaa',
  templateUrl: './bhagavad-geetaa.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './bhagavad-geetaa.component.css'
  ]
})
export class BhagavadGeetaaComponent implements OnInit {
  
  json: string = 'geetaa.json';

  geetaa: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.geetaa = data["scripture"];
    });
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
