import { Injectable } from '@angular/core';
import { Nivel } from '../model/Nivel';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/nivel';
  // private urlEndPoint: string = 'http://localhost:8081/api/personas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getNiveles(): Observable<Nivel[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Nivel[])
    );
  }
  
  create(nivel: Nivel) : Observable<Nivel> {
    return this.http.post<Nivel>(this.urlEndPoint, nivel, {headers: this.httpHeaders})
  }

  getNivel(id): Observable<Nivel>{
    return this.http.get<Nivel>(`${this.urlEndPoint}/${id}`)
  }

  update(nivel: Nivel): Observable<Nivel>{
    return this.http.put<Nivel>(`${this.urlEndPoint}/${nivel.id}`, nivel, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Nivel>{
    return this.http.delete<Nivel>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
