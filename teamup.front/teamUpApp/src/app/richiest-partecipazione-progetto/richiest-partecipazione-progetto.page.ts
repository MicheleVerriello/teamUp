import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utente } from '../models/Utente';
import { UtenteProgettoServiceService } from '../services/utente-progetto-service.service';
import { UtenteServiceService } from '../services/utente-service.service';
import { UtenteProgetto } from '../models/UtenteProgetto';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-richiest-partecipazione-progetto',
  templateUrl: './richiest-partecipazione-progetto.page.html',
  styleUrls: ['./richiest-partecipazione-progetto.page.scss'],
})
export class RichiestPartecipazioneProgettoPage implements OnInit {

  idProgetto: Number;
  utenti: Utente[] = [];

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private utenteProgettoService: UtenteProgettoServiceService, private utenteService: UtenteServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idProgetto = +params['id'];
    })

    this.getRichieste();
  }

  getRichieste() {

    this.utenti = [];
    this.utenteProgettoService.getUtentiByIdProgetto(this.idProgetto).subscribe(res => {
      for(let utente of res) {
        if(utente.tipoUtente === 2) {
          this.utenteService.getUtenteById(utente.fkIdUtente).subscribe(resGetUtente => {
            this.utenti.push(resGetUtente);
          });
        }
      }
    });
  }

  accettaRichiesta(idUtente: Number) {
    let utenteProgetto: UtenteProgetto = new UtenteProgetto();

    utenteProgetto.fkIdProgetto = this.idProgetto;
    utenteProgetto.fkIdUtente = idUtente;
    utenteProgetto.tipoUtente = 1;

    this.utenteProgettoService.abbandonaProgetto(idUtente, this.idProgetto).subscribe(res => {
      console.log(res);

      this.utenteProgettoService.partecipaProgetto(utenteProgetto).subscribe(resUtenteProgettoService => {
        console.log(resUtenteProgettoService);
        this.utenti = [];
        this.getRichieste();
      });
    })
  }

  rifiutaRichiesta(idUtente: Number) {

    this.utenteProgettoService.abbandonaProgetto(idUtente, this.idProgetto).subscribe(res => {
      this.getRichieste();
      console.log(res);
    })
  }

  indietro() {
    this.navCtrl.back();
  }
}
