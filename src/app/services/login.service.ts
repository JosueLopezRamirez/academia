import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private urlEndPoint:string = "http://localhost:8080/users/findAllUsers";

  getUsuario(): Observable<Usuario[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (res) => res as Usuario[])
    );
  }
}
