import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteServiceService } from '../services/utente-service.service';
import { Utente } from '../models/Utente';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  nuovoUtente: Utente;
  utenteRegistrato: Utente;
  confermaPassword: String;

  emailEsistente: boolean = false;
  usernameEsistente: boolean = false;
  emailEUsernameEsistenti: boolean = false;
  erroreGenerico: boolean = false;

  constructor(private router: Router, private utenteService: UtenteServiceService) {

    this.utenteRegistrato = new Utente();
    this.nuovoUtente = new Utente();
  }

  ngOnInit() {
  }

  registrazione() {
    this.utenteService.registrazione(this.nuovoUtente).subscribe(res => {
      if(res && res.id > 0) {
        this.utenteService.login(res.email, res.password).subscribe(resLogin => {

          if(resLogin && resLogin.id > 0) {
              AppComponent.idUtenteLoggato = resLogin.id;
              this.router.navigateByUrl("/tabs/tab5/" + resLogin.id);
          }
          else{
            this.erroreGenerico = true;
          }
        });
      }
      else if(res && res.id === -1) {
        this.emailEUsernameEsistenti = true;
      }
      else if(res && res.id === -2) {
        this.usernameEsistente = true;
      }
      else if(res && res.id === -3) {
        this.emailEsistente = true;
      }
      else{
       this.erroreGenerico = true;
      }
    });
  }

  pulsanteRegistratiAttivo(): boolean {

    let attivaPulsante: boolean;

    if(((this.nuovoUtente.password === this.confermaPassword) && this.nuovoUtente.password && this.nuovoUtente.password.length > 0) && (this.nuovoUtente.nome && this.nuovoUtente.nome.length > 0) && (this.nuovoUtente.cognome && this.nuovoUtente.cognome.length > 0) && (this.nuovoUtente.username && this.nuovoUtente.username.length > 0) && (this.nuovoUtente.email && this.nuovoUtente.email.length > 0)) {
      attivaPulsante = true;
    }
    else {
      attivaPulsante = false;
    }

    return attivaPulsante;
  }
  
  goToLoginPage() {

    this.router.navigateByUrl("/login");
  }
}
