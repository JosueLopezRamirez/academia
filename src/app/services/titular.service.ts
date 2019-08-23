import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Titular } from '../model/Titular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TitularDTO } from '../model/DTO/TitularDTO';
import { TitularDatos } from '../model/Petitions/TitularDatos';

@Injectable({
  providedIn: 'root'
})
export class TitularService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/titulares';
  // private urlEndPoint: string = 'http://localhost:8081/api/titulares';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getTitulares(): Observable<Titular[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Titular[])
    );
  }
  
  create(titular: TitularDTO,id: Number) : Observable<Titular> {
    return this.http.post<Titular>(`${this.urlEndPoint}/${id}`, titular, {headers: this.httpHeaders})
  }

  getTitular(id): Observable<Titular>{
    return this.http.get<Titular>(`${this.urlEndPoint}/${id}`)
  }

  getTitularInfo(): Observable<TitularDatos[]>{
    return this.http.get<TitularDatos[]>(`${this.urlEndPoint}-datos`)
  }

  update(titular: Titular): Observable<Titular>{
    return this.http.put<Titular>(`${this.urlEndPoint}/${titular.id}`, titular, {headers: this.httpHeaders})
  }
  
  delete(id: string): Observable<Titular>{
    return this.http.delete<Titular>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
