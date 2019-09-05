import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Pagos } from '../model/Petitions/Pagos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pago } from '../model/Petitions/Pago';
import { DatePipe } from '@angular/common';
import { EfectuarPago } from '../model/Petitions/EfectuarPago';
import { EstadoCuenta } from '../model/DTO/EstadoCuenta';

@Injectable({
  providedIn: 'root'
})
export class MensualidadService {

//   private urlEndPoint: string = 'http://localhost:8080/excellence/api/mensualidades';
    private urlEndPoint: string = 'http://localhost:8081/api/mensualidades';

    private httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })

    constructor(private http: HttpClient) { }

    getMensualidades(): Observable<Pagos[]> {
        return this.http.get(`${this.urlEndPoint}-totales`).pipe(
            map(response => {
                let mensualidades = response as Pagos[];
                return mensualidades.map(men => {
                    let datePite = new DatePipe('es-NI');
                    men.fecha_pago = datePite.transform(men.fecha_pago, 'dd/MM/yyyy');
                    return men;
                })
            })
        );
    }

    getAtrasados(): Observable<Pagos[]> {
        return this.http.get(`${this.urlEndPoint}-atrasados`).pipe(
            map(response => {
                let mensualidad = response as Pagos[];
                return mensualidad.map(men => {
                    let datePite = new DatePipe('es-NI');
                    men.fecha_pago = datePite.transform(men.fecha_pago, 'dd/MM/yyyy');
                    return men;
                });
            })
        );
    }

    getPendientes(pago: Pago): Observable<Pagos[]> {
        return this.http.post(`${this.urlEndPoint}-pendientes`,pago,{headers: this.httpHeaders}).pipe(
            map(response => {
                let mensualidad = response as Pagos[];
                return mensualidad.map(men => {
                    //Usando datePipe para formatear las fechas
                    let datePite = new DatePipe('es-NI');
                    men.fecha_pago = datePite.transform(men.fecha_pago, 'dd/MM/yyyy');
                    return men;
                });
            })
        );
    }

    // Obtener estados de cuenta de un titular en especifico
    getEstadoCuenta(id: string): Observable<EstadoCuenta[]> {
        return this.http.post(`${this.urlEndPoint}-estado-cuenta/${id}`,{headers: this.httpHeaders}).pipe(
            map(response => {
                let mensualidad = response as EstadoCuenta[];
                return mensualidad.map(men => {
                    //Usando datePipe para formatear las fechas
                    let datePite = new DatePipe('es-NI');
                    men.fecha_pago = datePite.transform(men.fecha_pago, 'dd/MM/yyyy');
                    return men;
                });
            })
        );
    }

    // mensualidades-canceladas
    getCancelados(pago: Pago): Observable<Pagos[]> {
        return this.http.post(`${this.urlEndPoint}-canceladas`,pago,{headers: this.httpHeaders}).pipe(
            map(response => {
                let mensualidad = response as Pagos[];
                return mensualidad.map(men => {
                    //Usando datePipe para formatear las fechas
                    let datePite = new DatePipe('es-NI');
                    men.fecha_pago = datePite.transform(men.fecha_pago, 'dd/MM/yyyy');
                    return men;
                });
            })
        );
    }
    
    // Metodo para crear una nueva mensualidad
    create(mensualidad: Pagos): Observable<Pagos> {
        return this.http.post<Pagos>(this.urlEndPoint, mensualidad, { headers: this.httpHeaders })
    }

    cambiarEstado(pago:EfectuarPago): Observable<any>{
        return this.http.post<any>(`${this.urlEndPoint}-pagado`, pago, { headers : this.httpHeaders }) 
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
