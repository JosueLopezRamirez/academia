import { Injectable } from '@angular/core';
import { Forma } from '../model/Forma';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Estrategia } from '../model/Estrategia';
@Injectable({
  providedIn: 'root'
})
export class EstrategiaService {

  constructor(private http: HttpClient) { }

  private urlEndPoint:string = "http://localhost:8080/excellence/api/estrategias";
  // private urlEndPoint: string = 'http://localhost:8081/api/estrategias';

  getEstrategia(): Observable<Estrategia[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (res) => res as Estrategia[])
    );
  }
}