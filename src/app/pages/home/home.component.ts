import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private $route: Subscription;

  dateFormat: string;
  eventGroups: any[];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.$route = this.route.data.subscribe(data => {
      this.dateFormat = data["resolvedData"]["pipeDateFormat"];
      this.eventGroups = data["resolvedData"]["eventGroups"].filter(this.displayEventGroup);
    });
  }

  displayEventGroup(element, index, array): boolean {
    // Check if "display" value for group in JSON is true/false
    return element["display"];
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

}
