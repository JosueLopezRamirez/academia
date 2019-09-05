import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from '../model/Cliente';
import { ClienteDTO } from '../model/DTO/ClienteDTO';
import { estadoCliente } from '../model/DTO/estadoCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  // private urlEndPoint: string = 'http://localhost:8080/excellence/api/clientes';
  private urlEndPoint: string = 'http://localhost:8081/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }
  
  create(cliente: ClienteDTO) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }

  cambiarEstado(cambio: estadoCliente): Observable<estadoCliente>{
    return this.http.post<estadoCliente>(`${this.urlEndPoint}-cambio`, cambio, {headers: this.httpHeaders})
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente: ClienteDTO): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }
  
  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
