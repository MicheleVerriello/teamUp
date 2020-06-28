import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgettoServiceService } from '../services/progetto-service.service';
import { UtenteProgettoServiceService } from '../services/utente-progetto-service.service';
import { Progetto } from '../models/Progetto';
import { UtenteServiceService } from '../services/utente-service.service';
import { DettaglioUtenteProgetto } from '../models/DettaglioUtenteProgetto';
import { AppComponent } from '../app.component';
import { PopoverController, NavController } from '@ionic/angular';
import { PopoverProgettoPage } from '../popover-progetto/popover-progetto.page';
import { UtenteProgetto } from '../models/UtenteProgetto';
import { CategoriaServiceService } from '../services/categoria-service.service';
import { Categoria } from '../models/Categoria';

@Component({
  selector: 'app-dettaglio-progetto',
  templateUrl: './dettaglio-progetto.page.html',
  styleUrls: ['./dettaglio-progetto.page.scss'],
})
export class DettaglioProgettoPage {

  progetto: Progetto;
  idProgettoString: String;
  idProgetto: Number;
  dettaglioUtentiProgetto: DettaglioUtenteProgetto[] = [];
  relazioneUtenteLoggatoProgetto: Number; //0 leader //1 teammate //2 richiesta inviata //3 nessuno
  categoria: Categoria;

  constructor(private navCtrl: NavController, private categoriaService: CategoriaServiceService, private route: ActivatedRoute, private popoverController: PopoverController, private progettoService: ProgettoServiceService, private utenteProgettoService: UtenteProgettoServiceService, private utenteService: UtenteServiceService) {
    this.progetto = new Progetto();
    this.categoria = new Categoria();
  }

  
  ionViewWillEnter() {
    this.route.params.subscribe(params => {
      this.idProgettoString = params['id'];
      this.idProgetto = +this.idProgettoString;
    });

    this.dettaglioUtentiProgetto = [];

    this.progettoService.getProgettoById(this.idProgetto).subscribe(res => {
      this.progetto = res;
      console.log("this.progetto ", res);

      this.getCateoriaById(res.fkIdCategoria);
    });

    this.getUtentiByIdProgetto();
  }

  getCateoriaById(id: Number) {
    this.categoriaService.getCategoriaById(id).subscribe(resCategoria => {
      this.categoria = resCategoria;
    });
  }

  getUtentiByIdProgetto() {
    this.utenteProgettoService.getUtentiByIdProgetto(this.idProgetto).subscribe(resGetUtentiByIdProgetto => {

      console.log("resGetUtentiByIdProgetto ", resGetUtentiByIdProgetto);
      this.relazioneUtenteLoggatoProgetto = 3;
      for(let utenteProgetto of resGetUtentiByIdProgetto) {

        console.log("utente-fkid", AppComponent.idUtenteLoggato + " " + utenteProgetto.fkIdUtente)

        if(AppComponent.idUtenteLoggato === utenteProgetto.fkIdUtente) {

          if(utenteProgetto.tipoUtente === 0) {
            this.relazioneUtenteLoggatoProgetto = 0 //leader
          }
          else if(utenteProgetto.tipoUtente === 1) {
            this.relazioneUtenteLoggatoProgetto = 1; //teammate
          }
          else{
            this.relazioneUtenteLoggatoProgetto = 2; //richiesta inviata
          }
        }

        console.log(this.relazioneUtenteLoggatoProgetto)
        let utenteConStato: DettaglioUtenteProgetto = new DettaglioUtenteProgetto();

        this.utenteService.getUtenteById(utenteProgetto.fkIdUtente).subscribe(resGetUtenteById => {
          console.log("resGetUtenteById ", resGetUtenteById);

          if(utenteProgetto.tipoUtente != 2) {
            utenteConStato.utente = resGetUtenteById;
            utenteConStato.tipoUtente = utenteProgetto.tipoUtente;
            this.dettaglioUtentiProgetto.push(utenteConStato);
          }
        });
      }
    });
  }


  async mostraPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverProgettoPage,
      componentProps: {
        idUtente: AppComponent.idUtenteLoggato,
        idProgetto: this.idProgetto,
        tipoUtente: this.relazioneUtenteLoggatoProgetto
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  partecipaProgetto() {

    let utenteProgetto: UtenteProgetto = new UtenteProgetto();
    utenteProgetto.fkIdProgetto = this.idProgetto;
    utenteProgetto.fkIdUtente = AppComponent.idUtenteLoggato;
    utenteProgetto.tipoUtente = 2;
    this.utenteProgettoService.partecipaProgetto(utenteProgetto).subscribe(res => {
      if(res > 0){
        this.relazioneUtenteLoggatoProgetto = 2;
      }
    });
  }

  espelliTeammate(idUtente: Number) {

    this.utenteProgettoService.abbandonaProgetto(idUtente, this.idProgetto).subscribe(res => {
      this.dettaglioUtentiProgetto = [];
      console.log(res)
      this.getUtentiByIdProgetto();
    });
  }

  indietro() {
    this.navCtrl.back();
  }
}
