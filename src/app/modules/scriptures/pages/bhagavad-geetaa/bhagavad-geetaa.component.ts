import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bhagavad-geetaa',
  templateUrl: './bhagavad-geetaa.component.html',
  styleUrls: [
    '../../scriptures.module.css',
    './bhagavad-geetaa.component.css'
  ]
})
export class BhagavadGeetaaComponent implements OnInit, OnDestroy {

  private $route: Subscription;

  geetaa: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.geetaa = data["resolvedData"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
