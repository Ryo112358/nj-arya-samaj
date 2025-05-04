import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-veda-atharva',
  templateUrl: './veda-atharva.component.html',
  styleUrls: [
    '../../scriptures.mod.scss',
    './veda-atharva.component.scss'
  ]
})
export class VedaAtharvaComponent implements OnInit, OnDestroy {

  private $route: Subscription;

  atharva: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.atharva = data["resolvedData"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  generateTitle(section) {
    return section["kaanda"] + "." + section["sukta"];
  }

  disableResourceIcon(path: string): boolean {
    // Disable if matches empty path (i.e. DNE)
    return path === "";
  }

}
