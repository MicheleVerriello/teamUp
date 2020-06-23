import { Component, OnInit } from '@angular/core';
import { NuovoProgetto } from '../models/NuovoProgetto';
import { Categoria } from '../models/Categoria';
import { ProgettoServiceService } from '../services/progetto-service.service';
import { CategoriaServiceService } from '../services/categoria-service.service';
import { Router } from '@angular/router';
import { Progetto } from '../models/Progetto';
import { AppComponent } from '../app.component';
import { UtenteProgettoServiceService } from '../services/utente-progetto-service.service';
import { UtenteProgetto } from '../models/UtenteProgetto';

@Component({
  selector: 'app-nuovo-progetto',
  templateUrl: './nuovo-progetto.page.html',
  styleUrls: ['./nuovo-progetto.page.scss'],
})
export class NuovoProgettoPage {

  progetto: Progetto;
  categorie: Categoria[] = [];
  erroreCreazioneProgetto: boolean = false;
  erroreInserimentoCategoria: boolean = false;
  categoriaGiaEsistente: boolean = false;
  categoria: Categoria;
  editCategoriaAperto: boolean = false;


  constructor(private progettoService: ProgettoServiceService, private categoriaService: CategoriaServiceService, private router: Router, private utenteProgettoService: UtenteProgettoServiceService) {
    this.categoria = new Categoria();
    this.progetto = new Progetto();
  }

  ngAfterViewInit() {
    this.getCategorie();
  }

  creaProgetto() {

    this.erroreInserimentoCategoria = false;
    this.categoriaGiaEsistente = false;
    this.erroreCreazioneProgetto = false;
    this.progettoService.creaProgetto(this.progetto).subscribe(res => {

      if(res > 0) {
        
        let utenteProgetto: UtenteProgetto;
        utenteProgetto = new UtenteProgetto();
        utenteProgetto.fkIdProgetto = res;
        utenteProgetto.tipoUtente = 0;
        utenteProgetto.fkIdUtente = AppComponent.idUtenteLoggato;

        this.utenteProgettoService.partecipaProgetto(utenteProgetto).subscribe(resUtenteProgetto => {
          if(resUtenteProgetto > 0) {
            this.router.navigateByUrl("tabs/tab2");
          }
          else{
            this.erroreCreazioneProgetto = true;
          }
        });
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

  creaCategoria() {
    
    this.erroreInserimentoCategoria = false;
    this.categoriaGiaEsistente = false;
    this.erroreCreazioneProgetto = false;
    
    this.categoriaService.creaCategoria(this.categoria).subscribe(res => {

      if(res > 0) {
        this.getCategorie();
        this.editCategoriaAperto = false;
      }
      else if(res === -1) {
        this.categoriaGiaEsistente = true;
      }
      else{
        this.erroreInserimentoCategoria = true;
      }
    });
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

  setCategoria(event) {

    this.erroreInserimentoCategoria = false;
    
    this.categoriaService.getCategoriaByNomeCategoria(event.detail.value).subscribe(res => {
      
      if(res > 0) {
        this.progetto.fkIdCategoria = res;
      }
      else {
        this.erroreInserimentoCategoria = true;
      }
    });

    console.log("this.progetto = ", this.progetto);
  }

  showEditCategoria() {
    this.editCategoriaAperto = true;
  }

  notShowEditCategoria() {
    this.editCategoriaAperto = false;
  }
}
