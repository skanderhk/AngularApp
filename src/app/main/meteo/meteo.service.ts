import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { Meteo } from './meteo';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private key = environment.key;
  private apiURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getMeteo1jour(ville: string): Observable<Meteo> {
    return this.http.get<Meteo>(this.apiURL+`/weather?q=${ville}&appid=${this.key}`);
  }

  getMeteo5jours(ville: string): Observable<Meteo[]> {
    return this.http
      .get<any>(this.apiURL+`/forecast?q=${ville}&appid=${this.key}`)
      .pipe(map((data) => data.list));
  }
}
