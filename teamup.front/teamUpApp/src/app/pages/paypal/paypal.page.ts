import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ProgettoServiceService } from 'src/app/services/progetto-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Progetto } from 'src/app/models/Progetto';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {

  idProgetto: Number;
  progetto: Progetto;
  paymentAmount: string = '2.00';
  currency: string = 'EUR';
  currencyIcon: string = '€';
  PRODUCTION_CLIENT_ID: string = "";
  SANDBOX_CLIENT_ID: string = "non immissibile per privacy";

  constructor(private navCtrl: NavController, private payPalService: PayPal, private progettoService: ProgettoServiceService, private router: Router, private route: ActivatedRoute) {
    this.progetto = new Progetto();
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idProgetto = +params['id'];
    });

    this.progettoService.getProgettoById(this.idProgetto).subscribe(res => {
      this.progetto = res;
    });
  }

  payWithPayPal() {

    this.progetto.sponsorizzato = 1;
    this.progettoService.modificaProgetto(this.progetto).subscribe(res => {
      console.log("res ", res);
      this.router.navigateByUrl("dettaglio-progetto/" + this.progetto.id);
    });

    /* console.log("Pay ????");
    this.payPalService.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: this.SANDBOX_CLIENT_ID
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPalService.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPalService.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    }); */
  }

  indietro() {
    this.navCtrl.back();
  }
}
