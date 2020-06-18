import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utente } from '../models/Utente';
import { UtenteServiceService } from '../services/utente-service.service';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit {

  idUtenteString: String;
  idUtente: Number;
  utente: Utente;
  isEdit: boolean = false;
  cambiaPasswordView: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private utenteService: UtenteServiceService) {
    this.utente = new Utente();
  }

  ngOnInit() {
    this.idUtenteString = this.activatedRoute.snapshot.paramMap.get("id");
    this.idUtente = +this.idUtenteString;
    this.utenteService.getUtenteById(this.idUtente).subscribe(res => {
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
