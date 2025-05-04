import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upanishad',
  templateUrl: './upanishad.component.html',
  styleUrls: [
    '../../scriptures-module.shared.css',
    './upanishad.component.css'
  ]
})
export class UpanishadComponent implements OnInit, OnDestroy {

  private $route: Subscription;

  upanishad: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.upanishad = data["resolvedData"];
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
