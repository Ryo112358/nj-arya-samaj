import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit, OnDestroy {
  
  private $route: Subscription;

  links: any[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.links = data["resolvedData"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

}
