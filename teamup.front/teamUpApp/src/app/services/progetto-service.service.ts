import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Progetto } from '../models/Progetto';

@Injectable({
  providedIn: 'root'
})
export class ProgettoServiceService {

  url: String = "http://localhost:8080/progetto";

  constructor(private http: HttpClient) { }

  creaProgetto(progetto: Progetto): Observable<Number> {
    return this.http.post<Number>(this.url + "/crea", progetto);
  }

  modificaProgetto(progetto: Progetto): Observable<Number> {
    return this.http.post<Number>(this.url + "/modifica", progetto);
  }

  getProgettoById(id: Number): Observable<Progetto> {
    return this.http.get<Progetto>(this.url + "/progetto/" + id);
  }

  ricercaProgetto(valore: String): Observable<Progetto[]> {
    return this.http.get<Progetto[]>(this.url + "/ricerca/" + valore);
  }

  eliminaProgettoById(id: Number): Observable<Number> {
    return this.http.delete<Number>(this.url + "/elimina/" + id);
  }

  getAll(): Observable<Progetto[]> {
    return this.http.get<Progetto[]>(this.url + "/progetti");
  }
}
