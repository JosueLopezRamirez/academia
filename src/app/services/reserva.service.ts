import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReservaModel } from '../model/ReservaModel';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  // private urlEndPoint: string = 'http://localhost:8080/excellence/api/reservas';
  private urlEndPoint: string = 'http://localhost:8081/api/reservas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getReservas(): Observable<ReservaModel[]> {
    return this.http.get(`${this.urlEndPoint}-datos`).pipe(
      map(response => response as ReservaModel[]))
  }
  
  create(reserva: ReservaModel) : Observable<ReservaModel> {
    return this.http.post<ReservaModel>(this.urlEndPoint, reserva, {headers: this.httpHeaders})
  }

  getDetalle(id): Observable<ReservaModel>{
    return this.http.get<ReservaModel>(`${this.urlEndPoint}/${id}`)
  }

  update(reserva: ReservaModel): Observable<ReservaModel>{
    return this.http.put<ReservaModel>(this.urlEndPoint, reserva, {headers: this.httpHeaders})
  }
  
  delete(id): Observable<ReservaModel>{
    return this.http.delete<ReservaModel>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
