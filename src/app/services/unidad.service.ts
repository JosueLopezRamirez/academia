import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Nivel } from '../model/Nivel';
import { Observable } from 'rxjs';
import { Unidad } from '../model/Unidad';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/unidad';
  // private urlEndPoint: string = 'http://localhost:8081/api/personas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getUnidades(): Observable<Unidad[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Unidad[])
    );
  }
  
  create(unidad: Unidad) : Observable<Unidad> {
    return this.http.post<Unidad>(this.urlEndPoint, unidad, {headers: this.httpHeaders})
  }

  getUnidad(id): Observable<Unidad>{
    return this.http.get<Unidad>(`${this.urlEndPoint}/${id}`)
  }

  update(unidad: Unidad): Observable<Unidad>{
    return this.http.put<Unidad>(`${this.urlEndPoint}/${unidad.id}`, unidad, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Unidad>{
    return this.http.delete<Unidad>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
