import { Component, OnInit } from '@angular/core';
import { NuovoProgetto } from '../models/NuovoProgetto';
import { Categoria } from '../models/Categoria';
import { ProgettoServiceService } from '../services/progetto-service.service';
import { CategoriaServiceService } from '../services/categoria-service.service';
import { Router } from '@angular/router';
import { Progetto } from '../models/Progetto';

@Component({
  selector: 'app-nuovo-progetto',
  templateUrl: './nuovo-progetto.page.html',
  styleUrls: ['./nuovo-progetto.page.scss'],
})
export class NuovoProgettoPage implements OnInit {

  nuovoProgetto: NuovoProgetto;
  progetto: Progetto;
  categorie: Categoria[] = [];
  erroreCreazioneProgetto: boolean = false;

  constructor(private progettoService: ProgettoServiceService, private categoriaService: CategoriaServiceService, private router: Router) {
    this.nuovoProgetto = new NuovoProgetto();
    this.progetto = new Progetto();
    this.getCategorie()
  }

  ngOnInit() {
  }

  creaProgetto() {

    this.erroreCreazioneProgetto = false;
    this.nuovoProgetto.progetto = this.progetto;
    this.progettoService.creaProgetto(this.nuovoProgetto).subscribe(res => {

      if(res > 0) {
        this.router.navigateByUrl("/tabs/tab2");
      }
      else{
        this.erroreCreazioneProgetto = true;
      }
    });
  }

  getCategorie() {

    this.categoriaService.getCategorie().subscribe(res => {
      this.categorie = res;
      console.log(res);
    });

  }

  nuovaCategoria() {

  }

  creaProgettoAttivo(): boolean {

    let pulsanteCreaProgettoAttivo: boolean;

    if((this.progetto.nomeProgetto && this.progetto.nomeProgetto.length > 0) && (this.progetto.descrizione && this.progetto.descrizione.length > 0) /*&& ( Controlli sulla categoria )*/){
      pulsanteCreaProgettoAttivo = true;
    }
    else{
      pulsanteCreaProgettoAttivo = false;
    }

    return true;
  }
}
