import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sanskaara',
  templateUrl: './sanskaara.component.html',
  styleUrls: ['./sanskaara.component.scss']
})
export class SanskaaraComponent implements OnInit, OnDestroy {
  
  private $route: Subscription;

  sanskaaras: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.sanskaaras = data["resolvedData"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
