import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';
import { Candidatos } from './candidatos';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  private apiUrl: string = "https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons";

  constructor(private http: HttpClient) {}

  getCandidatos(): Observable<Candidatos[]> {
    return this.http.get<Candidatos[]>(this.apiUrl + "/" + "candidates.json")
  }

  getCantidato(id: string): Observable<Candidatos> {
    return this.http.get<Candidatos>(this.apiUrl + "/" + id + "/" + "candidates.json");
  }
}