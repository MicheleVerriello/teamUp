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
  
  getProgettiByIdUtente(id: Number): Observable<Number[]> {
    return this.http.get<Number[]>(this.url + "/progetti/" + id);
  }
}
