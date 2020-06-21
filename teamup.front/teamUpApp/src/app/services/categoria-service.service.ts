import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';
import { TestObject } from 'protractor/built/driverProviders';

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
}
