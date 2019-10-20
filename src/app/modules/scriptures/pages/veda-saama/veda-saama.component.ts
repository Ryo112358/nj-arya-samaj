import { Component, OnInit } from '@angular/core';
import saamaJSON from '../../../../../assets/data/scriptures/veda-saama.json';

@Component({
  selector: 'app-veda-saama',
  templateUrl: './veda-saama.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './veda-saama.component.css'
  ]
})
export class VedaSaamaComponent implements OnInit {

  saama: any[];

  constructor() {
    this.saama = saamaJSON.scripture;
  }

  ngOnInit() {
  }

  disableDocumentIcon(path: string): boolean {
    // Disable if matches default path (i.e. DNE)
    return path === "assets/docs/document.pdf";
  }

  disableAudioIcon(path: string): boolean {
    // Disable if matches default path (i.e. DNE)
    return path === "assets/audio/recording.mp3";
  }

}
