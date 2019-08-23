import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Telefono } from '../model/Telefono';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/telefonos';
  // private urlEndPoint: string = 'http://localhost:8081/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getTelefonos(): Observable<Telefono[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Telefono[])
    );
  }
  
  create(cliente: Telefono) : Observable<Telefono> {
    return this.http.post<Telefono>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }

  getTelefono(id): Observable<Telefono>{
    return this.http.get<Telefono>(`${this.urlEndPoint}/${id}`)
  }

  update(telefono: Telefono): Observable<Telefono>{
    return this.http.put<Telefono>(`${this.urlEndPoint}/${telefono.id}`, telefono, {headers: this.httpHeaders})
  }
  
  delete(id: number): Observable<Telefono>{
    return this.http.delete<Telefono>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
