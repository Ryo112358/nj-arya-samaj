import { Component, OnInit } from '@angular/core';
import upanishadJSON from '../../../../assets/data/scriptures/upanishad.json';

@Component({
  selector: 'app-upanishad',
  templateUrl: './upanishad_v2.component.html',
  styleUrls: ['./upanishad.component.css']
})
export class UpanishadComponent implements OnInit {

  upanishad: any[];

  constructor() {
    this.upanishad = upanishadJSON.upanishad;
  }

  ngOnInit() { }

}
