import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtenteServiceService } from '../services/utente-service.service';
import { Utente } from '../models/Utente';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: String;
  password: String;
  utente: Utente;
  errorLogin: Boolean;

  constructor(private router: Router, private utenteService: UtenteServiceService) { 
    this.utente = new Utente();
  }

  ngOnInit() {
  }

  login() {
    this.utenteService.login(this.email, this.password).subscribe(res => {

      if(res && res.id > 0) {
        if(this.password === res.password) {
          this.errorLogin = false;
          AppComponent.idUtenteLoggato = res.id;
          this.router.navigateByUrl("/tabs/tab5");
        }
        else{
          this.errorLogin = true;
        }
      }
      else {
        this.errorLogin = true;
      }
    })
  }

  goToRegistrationPage() {

    this.router.navigateByUrl("/registrazione");
  }

}
