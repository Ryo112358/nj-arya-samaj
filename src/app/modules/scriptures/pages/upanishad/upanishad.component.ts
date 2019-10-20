import { Component, OnInit } from '@angular/core';
import upanishadJSON from '../../../../../assets/data/scriptures/upanishad.json';

@Component({
  selector: 'app-upanishad',
  templateUrl: './upanishad.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './upanishad.component.css'
  ]
})
export class UpanishadComponent implements OnInit {

  upanishad: any[];

  constructor() {
    this.upanishad = upanishadJSON.scripture;
  }

  ngOnInit() { }

  disableDocumentIcon(path: string): boolean {
    // Disable if matches default path (i.e. DNE)
    return path === "assets/docs/document.pdf";
  }

  disableAudioIcon(path: string): boolean {
    // Disable if matches default path (i.e. DNE)
    return path === "assets/audio/recording.mp3";
  }

}
