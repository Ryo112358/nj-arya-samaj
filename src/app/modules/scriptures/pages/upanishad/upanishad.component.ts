import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';
// import upanishadJSON from '../../../../../assets/data/scriptures/upanishad.json';

@Component({
  selector: 'app-upanishad',
  templateUrl: './upanishad.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './upanishad.component.css'
  ]
})
export class UpanishadComponent implements OnInit {
  
  json: string = 'upanishad.json';

  upanishad: any[];

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.upanishad = data["scripture"];
    });
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
