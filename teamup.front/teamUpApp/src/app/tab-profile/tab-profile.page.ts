import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utente } from '../models/Utente';
import { UtenteServiceService } from '../services/utente-service.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit {

  utente: Utente;
  isEdit: boolean = false;
  cambiaPasswordView: boolean = false;

  constructor(private utenteService: UtenteServiceService) {
    this.utente = new Utente();
  }

  ngOnInit() {

    this.utenteService.getUtenteById(AppComponent.idUtenteLoggato).subscribe(res => {
      this.utente = res;
    });
  }

  openEdit() {

    this.isEdit = true;
  }

  closeEdit() {

    this.isEdit = false;
  }

  modifica() {


    this.closeEdit();
  }

  openEditPassword() {
    this.cambiaPasswordView = true;
  }

  closeEditPassword() {
    this.cambiaPasswordView = false;
  }
}
