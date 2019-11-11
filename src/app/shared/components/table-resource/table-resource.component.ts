import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-resource',
  templateUrl: './table-resource.component.html',
  styleUrls: ['./table-resource.component.css']
})
export class TableResourceComponent implements OnInit {

  @Input() link: string;
  @Input() symbol: string;

  anchorClasses: string;
  iconClasses: string;
  tabIndex: number;

  private disabled: boolean;

  constructor() { }

  ngOnInit() {
    this.setDisabled(this.link);
    this.setAnchorClasses();
    this.setTabIndex();
    this.setIconClasses();
  }

  setDisabled(path: string): void {
    this.disabled = path === "";
  }

  setAnchorClasses() {
    this.anchorClasses = "anchor anchor-icon" + (this.disabled ? " anchor-disabled" : "");
  }

  setTabIndex() {
    this.tabIndex = this.disabled ? -1 : 0;
  }

  setIconClasses() {
    
    switch (this.symbol) {
      case "text": {
        this.iconClasses = "fa fa-file-text";
        break;
      }
      case "hindi": {
        this.iconClasses = "fa fa-language";
        break;
      }
      case "pdf": {
        this.iconClasses = "fa fa-file-pdf-o";
        break;
      }
      case "audio": {
        this.iconClasses = "fa fa-file-audio-o";
        break;
      }
      default: {
        this.iconClasses = "fa fa-ravelry";
        break;
      }
    }

  }

}
