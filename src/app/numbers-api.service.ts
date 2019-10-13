import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersApiService {

  private resourceUrl = ' https://numbersapi.p.rapidapi.com';
  private headers = new HttpHeaders({"x-rapidapi-host": "numbersapi.p.rapidapi.com", "x-rapidapi-key": "bd589b8864mshbcd0a61309f3981p1eb905jsncddd22081f92"});

  constructor(private http: HttpClient) { }

  aleatoire(): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/random/trivia?json=true`, { observe: 'response', headers: this.headers });
  }

  date(jour: number, moi: number): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${moi}/${jour}/date?json=true`, { observe: 'response', headers: this.headers });
  }

  chiffres(valeur: number): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${valeur}/math?json=true`, { observe: 'response', headers: this.headers });
  }

  annees(valeur: number): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/${valeur}/year?json=true`, { observe: 'response', headers: this.headers });
  }

  divers(valeur: string): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/random/${valeur}?json=true`, { observe: 'response', headers: this.headers });
  }

}
