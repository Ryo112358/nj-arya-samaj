import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-veda-yajur',
  templateUrl: './veda-yajur.component.html',
  styleUrls: [
    '../../scriptures.mod.scss',
    './veda-yajur.component.scss'
  ]
})
export class VedaYajurComponent implements OnInit, OnDestroy {

  private $route: Subscription;

  yajur: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.yajur = data["resolvedData"];
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
