import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';

import { JsonLoaderService } from 'app/core/services';

@Component({
  selector: 'app-upanishad',
  templateUrl: './upanishad.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './upanishad.component.css'
  ]
})
export class UpanishadComponent implements OnInit, OnDestroy {

  upanishad: any[];

  private $jsonObs: Subscription;
  private json: string = 'upanishad.json';

  constructor(private jsonLoaderService: JsonLoaderService) {}

  ngOnInit() {
    const jsonPath = environment.scripturesDataPath + this.json;

    this.$jsonObs = this.jsonLoaderService.getJSON(jsonPath).subscribe(data => {
      this.upanishad = data["scripture"];
    });
  }

  ngOnDestroy() {
    this.$jsonObs.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
