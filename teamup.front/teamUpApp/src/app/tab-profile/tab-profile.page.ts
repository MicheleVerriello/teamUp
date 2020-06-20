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
  utenteModificato: Utente;
  utenteModificaPassword: Utente;
  isEdit: boolean = false;
  cambiaPasswordView: boolean = false;
  modificaUsernameGiaEsistente: boolean = false;
  erroreGenerico: boolean = false;
  vecchiaPassword: String;
  nuovaPassword: String;
  confermaNuovaPassword: String;
  erroreGenericoCambioPassword: boolean = false;
  vecchiaPasswordDiversa: boolean = false;
  nuovaPasswordNonCombacia: boolean = false;

  constructor(private utenteService: UtenteServiceService) {
    this.utente = new Utente();
    this.utenteModificato = new Utente();
    this.utenteModificaPassword = new Utente();

    this.utenteService.getUtenteById(AppComponent.idUtenteLoggato).subscribe(res => {
      this.utente = res;

      this.utenteModificato.id = res.id;
      this.utenteModificato.nome = res.nome;
      this.utenteModificato.cognome = res.cognome;
      this.utenteModificato.username = res.username;
      this.utenteModificato.email = res.email;
      this.utenteModificato.password = res.password;

      this.utenteModificaPassword.id = res.id;
      this.utenteModificaPassword.nome = res.nome;
      this.utenteModificaPassword.cognome = res.cognome;
      this.utenteModificaPassword.username = res.username;
      this.utenteModificaPassword.email = res.email;
      this.utenteModificaPassword.password = res.password;
    });
  }

  ngOnInit() {

    this.utenteService.getUtenteById(AppComponent.idUtenteLoggato).subscribe(res => {
      this.utente = res;

      this.utenteModificato.id = res.id;
      this.utenteModificato.nome = res.nome;
      this.utenteModificato.cognome = res.cognome;
      this.utenteModificato.username = res.username;
      this.utenteModificato.email = res.email;
      this.utenteModificato.password = res.password;

      this.utenteModificaPassword.id = res.id;
      this.utenteModificaPassword.nome = res.nome;
      this.utenteModificaPassword.cognome = res.cognome;
      this.utenteModificaPassword.username = res.username;
      this.utenteModificaPassword.email = res.email;
      this.utenteModificaPassword.password = res.password;
    });
    
  }

  openEdit() {

    this.isEdit = true;
  }

  closeEdit() {
    this.erroreGenerico = false;
    this.modificaUsernameGiaEsistente = false;
    this.isEdit = false;
  }

  modifica() {

    this.erroreGenerico = false;
    this.modificaUsernameGiaEsistente = false;

    this.utenteService.modificaUtente(this.utenteModificato).subscribe(res => {
      if(res.id > 0) {
        console.log(res)
        this.utente = res;

        this.utenteModificaPassword.id = res.id;
        this.utenteModificaPassword.nome = res.nome;
        this.utenteModificaPassword.cognome = res.cognome;
        this.utenteModificaPassword.username = res.username;
        this.utenteModificaPassword.email = res.email;
        this.utenteModificaPassword.password = res.password;
        this.closeEdit();
      }
      else if (res.id === 0) {
        this.erroreGenerico = true;
      }
      else {
        this.modificaUsernameGiaEsistente = true;
      }
    })
  }

  cambiaPassword() {

    this.erroreGenericoCambioPassword = false;
    this.vecchiaPasswordDiversa = false;
    this.nuovaPasswordNonCombacia = false;

    this.utenteService.getUtenteById(AppComponent.idUtenteLoggato).subscribe(res => {
      if(this.vecchiaPassword === res.password){

        if(this.nuovaPassword === this.confermaNuovaPassword) {

          this.utenteModificaPassword.password = this.nuovaPassword;
    
          this.utenteService.modificaPassword(this.utenteModificaPassword).subscribe(res => {
            
            if(res.id > 0) {
              this.utente = res;
              this.closeEditPassword();
            }
            else {
              this.erroreGenericoCambioPassword = true;
            }
          });
        }
        else{
          this.nuovaPasswordNonCombacia = true;
        }
      }
      else{
        this.vecchiaPasswordDiversa = true;
      }
    });
  }

  openEditPassword() {
    this.cambiaPasswordView = true;
  }

  closeEditPassword() {
    this.erroreGenericoCambioPassword = false;
    this.vecchiaPasswordDiversa = false;
    this.nuovaPasswordNonCombacia = false;
    this.cambiaPasswordView = false;
  }
}
