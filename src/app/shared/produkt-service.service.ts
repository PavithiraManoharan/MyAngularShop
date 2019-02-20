import { Produkt } from './produkt';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProduktRaw } from './produkt-raw';
import { ProduktFactory } from './produkt-factory';

@Injectable({
  providedIn: 'root'
})
export class ProduktService {
  private api = 'http://localhost:3000';
  private headers: Headers = new Headers();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Produkt>> {
    return this.http
      .get<ProduktRaw[]>(`${this.api}/produktliste`)
      .pipe(
        retry(3),
        map(rawProdukte => rawProdukte
          .map(rawProdukt => ProduktFactory.fromObject(rawProdukt)),
        ),
        catchError(this.errorHandler)
      );
  }

  getOne(id: string): Observable<Produkt> {
    return this.http
      .get<ProduktRaw>(`${this.api}/produktliste/${id}`)
      .pipe(
        retry(3),
        map(rawBook => ProduktFactory.fromObject(rawBook)),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
