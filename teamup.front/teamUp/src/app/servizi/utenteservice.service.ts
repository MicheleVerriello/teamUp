import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../classi/Utente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtenteserviceService {

  url = "http://localhost:8080/utente";

  constructor(private http: HttpClient) { }

  registrazione(utente: Utente) : Observable<Utente> {

    return this.http.post<Utente>(this.url + "/registrazione", utente);
  }

  getListaUsername() : Observable<String[]> {

    return this.http.get<String[]>(this.url + "/username");
  }

  getListaEmail() : Observable<String[]> {

    return this.http.get<String[]>(this.url + "/email");
  }
}
