import { Component, OnInit, Input } from '@angular/core';

import { parseAsDate } from 'app/shared/utility/utility';

@Component({
  selector: 'table-resource',
  templateUrl: './table-resource.component.html',
  styleUrls: ['./table-resource.component.scss']
})
export class TableResourceComponent implements OnInit {

  @Input() fileInformation;
  @Input() symbol: string;

  resourcePath: string;
  tabIndex: number;
  iconClasses: string;
  anchorClasses: string;
  recentlyUpdated: boolean;

  private disabled: boolean;

  constructor() {
    this.recentlyUpdated = false;
  }

  ngOnInit() {
    this.setResourcePath();
    this.setDisabled();
    this.setTabIndex();
    this.setAnchorClasses();
    this.setIconClasses();
    this.setRecentlyUpdated();
  }

  setResourcePath() {

    if(typeof this.fileInformation === "string") {
      this.resourcePath = this.fileInformation;
    } else {
      this.resourcePath = this.fileInformation['filePath'];
    }

  }

  setDisabled(): void {
    this.disabled = this.resourcePath === "";
  }

  setTabIndex() {
    this.tabIndex = this.disabled ? -1 : 0;
  }

  setAnchorClasses() {
    this.anchorClasses = "anchor anchor-icon" + (this.disabled ? " anchor-disabled" : "");
  }

  setRecentlyUpdated() {

    if(typeof this.fileInformation === "string") {
    }
    else {

      const today = new Date();

      let dateModifiedOn;
      dateModifiedOn = new Date(this.fileInformation['last-modified-on']);
      
      // If today is more than 15 days after date, set true
      let cutoffDate = new Date(dateModifiedOn);
      cutoffDate.setDate(dateModifiedOn.getDate() + 16);  // 15 days + 1 buffer for less than comparison
      
      // console.log(today, cutoffDate);

      if(today < cutoffDate)
        this.recentlyUpdated = true;

      return;
    }

    this.recentlyUpdated = false;
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
