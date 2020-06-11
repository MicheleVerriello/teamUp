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

  getListaUsername() : Observable<String[]> {

    let url = "http://localhost:8080/lista/username";

    return this.http.get<String[]>(url);
  }


  getListaEmail() : Observable<String[]> {

    let url = "http://localhost:8080/lista/email";

    return this.http.get<String[]>(url);
  }
}
