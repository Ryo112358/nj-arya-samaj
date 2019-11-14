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

      this.pastGroups = data["pastEventGroups"];
      this.dateFormat = data["dateFormat"];
      this.upcomingGroups = data["upcomingEventGroups"];
    });
  }

  ngOnDestroy() {
    this.$route.unsubscribe();
  }

}
