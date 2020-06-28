import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utente } from '../models/Utente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {

  url: String = "http://localhost:8080/utente";

  constructor(private http: HttpClient) { }

  login(email: String, password: String): Observable<Utente> {
    return this.http.get<Utente>(this.url + '/login/' + email + "/" + password);
  }

  registrazione(utente: Utente) {
    return this.http.post<Utente>(this.url + "/registrazione", utente);
  }

  getUtenteById(id: Number): Observable<Utente> {
    return this.http.get<Utente>(this.url + "/utente/" + id);
  }

  modificaUtente(utente: Utente): Observable<Utente> {

    return this.http.post<Utente>(this.url + "/modifica", utente);
  }

  modificaPassword(utente: Utente): Observable<Utente> {

    return this.http.post<Utente>(this.url + "/modifica/password", utente);
  }

  eliminaUtente(id: Number): Observable<Number> {

    return this.http.delete<Number>(this.url + "/elimina/" + id);
  }

  ricercaUtente(valore: String): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.url + "/ricerca/" + valore)
  }
}
