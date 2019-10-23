import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-via-paypal',
  templateUrl: './donate-via-paypal.component.html',
  styleUrls: ['./donate-via-paypal.component.css']
})
export class DonateViaPaypalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;
 
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'sb',
      production: 'sb'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');    
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button-container');
        this.paypalLoad = false;
      })
    }
  }

}
