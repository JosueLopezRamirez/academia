import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../model/Alumno';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/alumnos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Alumno[])
    );
  }
  
  create(alumno: Alumno, id:Number) : Observable<Alumno> {
    return this.http.post<Alumno>(`${this.urlEndPoint}/${id}`, alumno, {headers: this.httpHeaders})
  }

  getAlumno(id): Observable<Alumno>{
    return this.http.get<Alumno>(`${this.urlEndPoint}/${id}`)
  }

  update(titular: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${this.urlEndPoint}/${titular.id}`, titular, {headers: this.httpHeaders})
  }
  
  delete(id: number): Observable<Alumno>{
    return this.http.delete<Alumno>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
