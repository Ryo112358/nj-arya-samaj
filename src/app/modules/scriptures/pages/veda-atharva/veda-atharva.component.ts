import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-veda-atharva',
  templateUrl: './veda-atharva.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-atharva.component.css'
  ]
})
export class VedaAtharvaComponent implements OnInit {
  
  json: string = 'veda-atharva.json';

  atharva: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.atharva = data["scripture"];
    });
  }

  generateTitle(section) {
    return section["kaanda"] + "." + section["sukta"];
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
