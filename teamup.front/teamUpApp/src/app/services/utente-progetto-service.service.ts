import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtenteProgetto } from '../models/UtenteProgetto';

@Injectable({
  providedIn: 'root'
})
export class UtenteProgettoServiceService {

  url: String = "http://localhost:8080/utente/progetto";

  constructor(private http: HttpClient) { }

  partecipaProgetto(utenteProgetto: UtenteProgetto): Observable<Number> {

    return this.http.post<Number>(this.url + "/partecipa", utenteProgetto);
  }
  
  getProgettiByIdUtente(id: Number): Observable<UtenteProgetto[]> {
    return this.http.get<UtenteProgetto[]>(this.url + "/progetti/" + id);
  }

  getUtentiByIdProgetto(idProgetto: Number): Observable<UtenteProgetto[]> {
    return this.http.get<UtenteProgetto[]>(this.url + "/utenti/" + idProgetto);
  }

  abbandonaProgetto(idUtente: Number, idProgetto: Number) {
    return this.http.delete<Number>(this.url + "/abbandona/" + idUtente + "/" + idProgetto);
  }

  inviaRichiestaDiPartecipazioneProgetto(utenteProgetto: UtenteProgetto): Observable<Number> {
    return this.http.post<Number>(this.url + "/partecipa", utenteProgetto);
  }

  accettaRichiesta(utenteProgetto: UtenteProgetto): Observable<Number> {
    return this.http.post<Number>(this.url + "/progetto/accetta", utenteProgetto);
  }
}
