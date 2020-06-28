import { Component } from '@angular/core';
import { UtenteProgettoServiceService } from '../services/utente-progetto-service.service';
import { ProgettoServiceService } from '../services/progetto-service.service';
import { Progetto } from '../models/Progetto';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  progetti: Progetto[] = [];

  constructor(private utenteProgettoService: UtenteProgettoServiceService, private progettoService: ProgettoServiceService) {
  }

  getProgettiByIdUtente() {

    this.progetti = [];
    this.utenteProgettoService.getProgettiByIdUtente(AppComponent.idUtenteLoggato).subscribe(res => {

      console.log(res);

      for(let progetto of res) {
        this.progettoService.getProgettoById(progetto.fkIdProgetto).subscribe(resProgetto => {
          this.progetti.push(resProgetto);
        })
      }
    });
  }

  doRefresh(event) {
      setTimeout(() => {
      this.getProgettiByIdUtente();
      event.target.complete();
    }, 2000);
  }


  ionViewDidEnter(){
    this.getProgettiByIdUtente();
  }
}
