import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Correo } from '../model/Correo';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/correos';
  // private urlEndPoint: string = 'http://localhost:8081/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCorreos(): Observable<Correo[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Correo[])
    );
  }
  
  create(correo: Correo) : Observable<Correo> {
    return this.http.post<Correo>(this.urlEndPoint, Correo, {headers: this.httpHeaders})
  }

  getCorreo(id): Observable<Correo>{
    return this.http.get<Correo>(`${this.urlEndPoint}/${id}`)
  }

  update(correo: Correo): Observable<Correo>{
    return this.http.put<Correo>(`${this.urlEndPoint}/${correo.id}`, correo, {headers: this.httpHeaders})
  }
  
  delete(id: number): Observable<Correo>{
    return this.http.delete<Correo>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
