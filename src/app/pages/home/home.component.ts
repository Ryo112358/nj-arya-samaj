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

  upcomingGroups: any[];
  pastGroups: any[];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    // this.dateFormat = 'EEEE, MMM d';
    
    this.$route = this.route.data.subscribe(data => {
      this.dateFormat = data["eventsJSON"]["pipeDateFormat"];
      this.pastGroups = data["eventsJSON"]["pastEventGroups"];
      this.upcomingGroups = data["eventsJSON"]["upcomingEventGroups"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

}
