import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgettoServiceService } from '../services/progetto-service.service';
import { UtenteProgettoServiceService } from '../services/utente-progetto-service.service';
import { NavParams, PopoverController } from '@ionic/angular';
import { Progetto } from '../models/Progetto';

@Component({
  selector: 'app-popover-progetto',
  templateUrl: './popover-progetto.page.html',
  styleUrls: ['./popover-progetto.page.scss'],
})
export class PopoverProgettoPage implements OnInit {

  idProgetto: Number;
  tipoUtente: Number;
  idUtente: Number;
  contatoreRichieste: number = 0;
  progetto: Progetto;

  constructor(private navParams: NavParams, private popoverCtrl: PopoverController, private router: Router, private progettoService: ProgettoServiceService, private utenteProgettoService: UtenteProgettoServiceService) {
    this.progetto = new Progetto();
  }

  ngOnInit() {

    this.idProgetto = this.navParams.get("idProgetto");
    this.tipoUtente = this.navParams.get("tipoUtente");
    this.idUtente = this.navParams.get("idUtente");

    this.utenteProgettoService.getUtentiByIdProgetto(this.idProgetto).subscribe(res => {
      for(let utente of res) {
        if(utente.tipoUtente === 2) {
          this.contatoreRichieste = this.contatoreRichieste + 1;
        }
      }
    });

    this.progettoService.getProgettoById(this.idProgetto).subscribe(res => {
      this.progetto = res;
    });
  }

  vaiAPaginaRichieste() {
    this.popoverCtrl.dismiss();
    this.router.navigateByUrl("richiest-partecipazione-progetto/" + this.idProgetto);
  }

  eliminaProgetto() {
    this.popoverCtrl.dismiss();
    this.progettoService.eliminaProgettoById(this.idProgetto).subscribe(res => {
      this.router.navigateByUrl("tabs/tab2");
    });
  }

  abbandonaProgetto() {
    this.popoverCtrl.dismiss();
    this.utenteProgettoService.abbandonaProgetto(this.idUtente, this.idProgetto).subscribe(res => {
      this.router.navigateByUrl("tabs/tab2");
    });
  }

  modificaProgetto() {

    this.popoverCtrl.dismiss();
    this.router.navigateByUrl("modifica-progetto/" + this.idProgetto);
  }

  sponsorizzaProgetto() {
    this.popoverCtrl.dismiss();
    this.router.navigateByUrl("paypal/" + this.idProgetto);
  }
}
