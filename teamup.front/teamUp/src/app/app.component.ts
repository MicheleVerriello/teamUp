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

  constructor() {
    localStorage.setItem("isLoggedIn", "true");
  }
}
