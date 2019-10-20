import { Component, OnInit } from '@angular/core';
import sanskaarasJSON from '../../../../../assets/data/sanskaaras.json';

@Component({
  selector: 'app-sanskaara',
  templateUrl: './sanskaara.component.html',
  styleUrls: ['./sanskaara.component.css']
})
export class SanskaaraComponent implements OnInit {

  sanskaaras: any[];

  constructor() {
    this.sanskaaras = sanskaarasJSON.sanskaaras;
  }

  ngOnInit() {
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
