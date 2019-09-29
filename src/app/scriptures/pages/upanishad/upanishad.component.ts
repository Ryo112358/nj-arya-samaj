import { Component, OnInit } from '@angular/core';
import upanishadJSON from '../../../../assets/data/scriptures/upanishad.json';

@Component({
  selector: 'app-upanishad',
  templateUrl: './upanishad.component.html',
  styleUrls: ['./upanishad.component.css']
})
export class UpanishadComponent implements OnInit {

  upanishad: any[];

  constructor() {
    this.upanishad = upanishadJSON.upanishad;
  }

  ngOnInit() { }

}
