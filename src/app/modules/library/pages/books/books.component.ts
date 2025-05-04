import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    standalone: false
})
export class BooksComponent implements OnInit, OnDestroy {
  
  private $route: Subscription;
  
  books: any[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.$route = this.route.data.subscribe(data => {
      this.books = data["resolvedData"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

  disableResourceIcon(path: string): boolean {
    return path === "";
  }

}
