import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetalleTutoriaDatos } from '../model/Petitions/DetalleTutoriaDatos';
import { DetalleTutoriaDTO } from '../model/DTO/DetalleTutoriaDTO';

@Injectable({
  providedIn: 'root'
})
export class DetalleTutoriaService {

  // private urlEndPoint: string = 'http://localhost:8080/excellence/api/detalle-tutoria';
  private urlEndPoint: string = 'http://localhost:8081/api/detalle-tutoria';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getDetalleTutorias(): Observable<DetalleTutoriaDatos[]> {
    return this.http.get(`${this.urlEndPoint}-datos`).pipe(
      map(response => {
        let detalles = response as DetalleTutoriaDatos[];
        return detalles.map(detalle => {
          //Usando datePipe para formatear las fechas
          let datePite = new DatePipe('es-NI');
          detalle.fecha = datePite.transform(detalle.fecha,'EEEE dd, MMMM yyyy');
          return detalle;
        });
      })
    );
  }
  
  create(detalle: DetalleTutoriaDTO) : Observable<DetalleTutoriaDTO> {
    return this.http.post<DetalleTutoriaDTO>(this.urlEndPoint, detalle, {headers: this.httpHeaders})
  }

  getDetalle(id): Observable<DetalleTutoriaDTO>{
    return this.http.get<DetalleTutoriaDTO>(`${this.urlEndPoint}/${id}`)
  }

  update(detalle: DetalleTutoriaDTO): Observable<DetalleTutoriaDTO>{
    return this.http.put<DetalleTutoriaDTO>(`${this.urlEndPoint}/${detalle.id}`, detalle, {headers: this.httpHeaders})
  }
  
  delete(id: number): Observable<DetalleTutoriaDTO>{
    return this.http.delete<DetalleTutoriaDTO>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
