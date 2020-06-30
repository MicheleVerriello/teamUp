import { Component, OnInit } from '@angular/core';
import { ProgettoServiceService } from '../services/progetto-service.service';
import { CategoriaServiceService } from '../services/categoria-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from '../models/Categoria';
import { Progetto } from '../models/Progetto';

@Component({
  selector: 'app-modifica-progetto',
  templateUrl: './modifica-progetto.page.html',
  styleUrls: ['./modifica-progetto.page.scss'],
})
export class ModificaProgettoPage {

  idProgetto: Number;
  progetto: Progetto;
  categorie: Categoria[] = [];
  erroreModificaProgetto: boolean = false;
  erroreInserimentoCategoria: boolean = false;
  categoriaGiaEsistente: boolean = false;
  categoria: Categoria;
  editCategoriaAperto: boolean = false;

  constructor(private progettoService: ProgettoServiceService, private categoriaService: CategoriaServiceService, private router: Router, private route: ActivatedRoute) {
    this.categoria = new Categoria();
    this.progetto = new Progetto();
  }

  ngAfterViewInit() {

    this.route.params.subscribe(param => {
      this.idProgetto = +param["id"];
    });

    this.progettoService.getProgettoById(this.idProgetto).subscribe(res => {
      this.progetto = res;
    });
    this.getCategorie();
  }

  modificaProgetto() {

    this.erroreInserimentoCategoria = false;
    this.categoriaGiaEsistente = false;
    this.erroreModificaProgetto = false;
    this.progettoService.modificaProgetto(this.progetto).subscribe(res => {

      if(res > 0) {
        this.router.navigateByUrl("dettaglio-progetto/" + this.progetto.id);
      }
      else{
        this.erroreModificaProgetto = true;
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
    this.erroreModificaProgetto = false;
    
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

  modificaProgettoAttivo(): boolean {

    let pulsanteModificaProgettoAttivo: boolean;

    if((this.progetto.nomeProgetto && this.progetto.nomeProgetto.length > 0) && (this.progetto.descrizione && this.progetto.descrizione.length > 0) && (this.progetto.fkIdCategoria && this.progetto.fkIdCategoria > 0)){
      pulsanteModificaProgettoAttivo = true;
    }
    else{
      pulsanteModificaProgettoAttivo = false;
    }

    return pulsanteModificaProgettoAttivo;
  }

  showEditCategoria() {
    this.editCategoriaAperto = true;
  }

  notShowEditCategoria() {
    this.editCategoriaAperto = false;
  }
}
