import { Injectable } from '@angular/core';
import { Forma } from '../model/Forma';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormaService {

  constructor(private http: HttpClient) { }

  // private urlEndPoint:string = "http://localhost:8080/excellence/api/formas";
  private urlEndPoint: string = 'http://localhost:8081/api/formas';

  getForma(): Observable<Forma[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (res) => res as Forma[])
    );
  }
}
