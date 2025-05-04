import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  
  private $route: Subscription;
  
  articles: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.articles = data["resolvedData"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
