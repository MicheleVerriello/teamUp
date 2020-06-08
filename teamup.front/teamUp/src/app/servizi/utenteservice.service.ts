import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../classi/Utente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtenteserviceService {

  constructor(private http: HttpClient) { }

  registrazione(utente: Utente) : Observable<Utente> {

    let url = "http://localhost:8080/registrazione";

    return this.http.post<Utente>(url, utente);
  }
}
