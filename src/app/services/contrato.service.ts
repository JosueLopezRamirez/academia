import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Contrato } from '../model/Contrato';
import { ContratoDTO } from '../model/DTO/ContratoDTO';
import { ContratoId } from '../model/composite/ContratoId';
import { RecordProduccion } from '../model/RecordProduccion';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ContratoService {

    // private urlEndPoint: string = 'http://localhost:8080/excellence/api/contratos';
    private urlEndPoint: string = 'http://localhost:8081/api/contratos';

    private httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })

    constructor(private http: HttpClient) { }

    getContratos(): Observable<Contrato[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Contrato[])
        );
    }

    getRecord(): Observable<RecordProduccion[]> {
        return this.http.get(`${this.urlEndPoint}-record`).pipe(
            map(response => {
                let records = response as RecordProduccion[];
                return records.map(record => {
                    //Usando datePipe para formatear las fechas
                    let datePite = new DatePipe('es-NI');
                    record.fecha = datePite.transform(record.fecha, 'dd/MM/yyyy');
                    return record;
                });
            })
        );
    }

    create(contrato: ContratoDTO): Observable<Contrato> {
        return this.http.post<Contrato>(this.urlEndPoint, contrato, { headers: this.httpHeaders })
    }

    getContrato(id): Observable<Contrato> {
        return this.http.get<Contrato>(`${this.urlEndPoint}/${id}`)
    }

    // update(contrato: Contrato): Observable<Contrato>{
    //     return this.http.put<Contrato>(`${this.urlEndPoint}/${titular.id}`, titular, {headers: this.httpHeaders})
    // }

    delete(contratoId: ContratoId): Observable<Contrato> {
        return this.http.delete<Contrato>(this.urlEndPoint, { headers: this.httpHeaders })
    }
}