import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veda-saama',
  templateUrl: './veda-saama.component.html',
  styleUrls: [
    '../../scriptures-module.shared.css',
    './veda-saama.component.css'
  ]
})
export class VedaSaamaComponent implements OnInit, OnDestroy {

  private $route: Subscription;

  saama: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.saama = data["resolvedData"];
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
