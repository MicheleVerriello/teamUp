import { Component } from '@angular/core';
import { ProgettoServiceService } from '../../services/progetto-service.service';
import { UtenteServiceService } from '../../services/utente-service.service';
import { Progetto } from '../../models/Progetto';
import { Utente } from '../../models/Utente';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  progetti: Progetto[] = [];
  utenti: Utente[] = [];
  ricercaPerUtente: boolean = true;

  constructor(private progettoService: ProgettoServiceService, private utenteService: UtenteServiceService) {}


  ricerca(valoreDiRiceca: String) {

    if(valoreDiRiceca === null) {
      valoreDiRiceca = "";
    }

    if(valoreDiRiceca != "") {
      if(this.ricercaPerUtente) {
        this.utenteService.ricercaUtente(valoreDiRiceca).subscribe(res => {
  
          this.utenti = res;
        });
      }
      else {
        this.progettoService.ricercaProgetto(valoreDiRiceca).subscribe(res2 => {
          this.progetti = res2;
        });
      }
    }
  }

  setTipoRicerca(event){
    if(event.detail.value === "utente") {
      this.ricercaPerUtente = true;
      this.progetti = [];
      this.utenti = [];
    }
    else {
      this.ricercaPerUtente = false;
      this.progetti = [];
      this.utenti = [];
    }
  }
}
