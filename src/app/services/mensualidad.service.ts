import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Pagos } from '../model/Petitions/Pagos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pago } from '../model/Petitions/Pago';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MensualidadService {

  // private urlEndPoint: string = 'http://localhost:8080/excellence/api/mensualidades';
    private urlEndPoint: string = 'http://localhost:8081/api/mensualidades';

    private httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })

    constructor(private http: HttpClient) { }

    getMensualidades(): Observable<any[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as any[])
        );
    }

    getPendientes(pago: Pago): Observable<Pagos[]> {
        return this.http.post(`${this.urlEndPoint}-pendientes`,pago,{headers: this.httpHeaders}).pipe(
            map(response => {
                let mensualidad = response as Pagos[];
                return mensualidad.map(men => {
                    //Usando datePipe para formatear las fechas
                    let datePite = new DatePipe('es-NI');
                    men.fecha_pago = datePite.transform(men.fecha_pago, 'EEEE dd, MMMM yyyy');
                    return men;
                });
            })
        );
    }

    create(mensualidad: Pagos): Observable<Pagos> {
        return this.http.post<Pagos>(this.urlEndPoint, mensualidad, { headers: this.httpHeaders })
    }

    getMensualidad(id): Observable<Pagos> {
        return this.http.get<Pagos>(`${this.urlEndPoint}/${id}`)
    }

    // update(contrato: Contrato): Observable<Contrato>{
    //     return this.http.put<Contrato>(`${this.urlEndPoint}/${titular.id}`, titular, {headers: this.httpHeaders})
    // }

    delete(id: Number): Observable<Pagos> {
        return this.http.delete<Pagos>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
    }
}
