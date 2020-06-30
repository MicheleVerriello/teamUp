import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  url: String = "http://localhost:8080/categoria";

  constructor(private http: HttpClient) { }

  getCategorie(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url + "/categorie");
  }

  getCategoriaByNomeCategoria(nomeCategoria: String): Observable<Number> {
    return this.http.get<Number>(this.url + "/categoria/" + nomeCategoria);
  }

  getCategoriaById(id: Number): Observable<Categoria> {
    return this.http.get<Categoria>(this.url + "/categoria/id/" + id);
  }

  creaCategoria(categoria: Categoria): Observable<Number> {
    return this.http.post<Number>(this.url + "/categoria", categoria);
  }
}
