import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-veda-yajur',
  templateUrl: './veda-yajur.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-yajur.component.css'
  ]
})
export class VedaYajurComponent implements OnInit {
  
  json: string = 'veda-yajur.json';

  yajur: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.yajur = data["scripture"];
    });
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
