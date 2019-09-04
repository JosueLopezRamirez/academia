import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Asesor } from '../model/Asesor';
@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(private http: HttpClient) { }

  // private urlEndPoint:string = "http://localhost:8080/excellence/api/asesores";
  private urlEndPoint: string = 'http://localhost:8081/api/asesores';

  getAsesores(): Observable<Asesor[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (res) => res as Asesor[])
    );
  }
}