import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mandala',
  templateUrl: './mandala.component.html',
  styleUrls: [
    '../../../scriptures.module.css',
    './mandala.component.css'
  ]
})
export class MandalaComponent implements OnInit {

  @Input('mandalaInfo') mandala;

  constructor() {
  }

  ngOnInit() {
  }

  generateTitle(section) {
    return this.mandala["id"] + "." + section["sukta"];
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
