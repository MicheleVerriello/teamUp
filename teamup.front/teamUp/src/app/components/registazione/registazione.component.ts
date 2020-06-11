import { Component, OnInit } from '@angular/core';
import { UtenteserviceService } from 'src/app/servizi/utenteservice.service';
import { Utente } from 'src/app/classi/Utente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registazione',
  templateUrl: './registazione.component.html',
  styleUrls: ['./registazione.component.css']
})
export class RegistazioneComponent implements OnInit {

  utente: Utente;
  confermaPassword: String;
  listaEmail: String[] = [];
  listaUsername: String[] = [];
  isLoggedIn: String;

  constructor(private utenteService: UtenteserviceService, private router: Router) {
    this.utente = new Utente();
  }

  ngOnInit(): void {
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
    this.router.navigate(['/login']);
  }


  getListaEmail() {
    this.utenteService.getListaEmail().subscribe(res => {
      this.listaEmail = res;
    })
  }


  getListaUsername() {
    this.utenteService.getListaUsername().subscribe(res => {
      this.listaUsername = res;
    })
  }


  emailGiaEsistente() : boolean {

    let emailPresente : boolean = false;

    console.log(this.listaEmail)

    for(let email of this.listaEmail) {
      if(email === this.utente.email) {
        emailPresente = true;
      }
    }

    return emailPresente;
  }
}
