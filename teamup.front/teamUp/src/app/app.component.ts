import { Component } from '@angular/core';
import { Utente } from './classi/Utente';
import { UtenteserviceService } from './servizi/utenteservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamUp';

  utente: Utente;
  confermaPassword: String;

  constructor(private utenteService: UtenteserviceService) {
    this.utente = new Utente();
  }

  registrazione() {

    //necessari controlli sull' esistenza della mail e dello username

    if(this.utente.password === this.confermaPassword) {
      
      let utenteResponse: Utente;
      
      this.utenteService.registrazione(this.utente).subscribe(res => {
        utenteResponse = res;
      })
    }
  }


  goToLoginPage() {
    
  }
}
