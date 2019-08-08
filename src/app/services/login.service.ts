import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { User } from '../model/Petitions/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private urlEndPoint:string = "http://localhost:8080/excellence/users/findAllUsers";

  getUsuario(): Observable<User[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (res) => res as User[])
    );
  }
}
