import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-via-paypal',
  templateUrl: './donate-via-paypal.component.html',
  styleUrls: ['./donate-via-paypal.component.css']
})
export class DonateViaPaypalComponent implements OnInit {

  paypalDonationURL: String;

  constructor() {
    this.paypalDonationURL = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=89L2EXPC4UBMC&source=url";
  }

  ngOnInit() {
  }

}
