import { Injectable } from '@angular/core';
import { NuovoProgetto } from '../models/NuovoProgetto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgettoServiceService {

  url: String = "http://localhost:8080/progetto";

  constructor(private http: HttpClient) { }

  creaProgetto(nuovoProgetto: NuovoProgetto): Observable<Number> {

    return this.http.post<Number>(this.url + "/crea", nuovoProgetto);
  } 
}
