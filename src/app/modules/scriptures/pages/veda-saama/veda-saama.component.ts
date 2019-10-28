import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-veda-saama',
  templateUrl: './veda-saama.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-saama.component.css'
  ]
})
export class VedaSaamaComponent implements OnInit {
  
  json: string = 'veda-saama.json';

  saama: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.saama = data["scripture"];
    });
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
