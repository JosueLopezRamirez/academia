import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../model/Alumno';
import { map } from 'rxjs/operators';
import { AlumnoDatos } from '../model/Petitions/AlumnoDatos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/alumnos';
  // private urlEndPoint: string = 'http://localhost:8081/api/alumnos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Alumno[])
    );
  }

  getAlumnoInfo(): Observable<AlumnoDatos[]> {
    return this.http.get(`${this.urlEndPoint}-datos`).pipe(
      map(response => response as AlumnoDatos[])
    );
  }
  
  create(alumno: Alumno, id:Number) : Observable<Alumno> {
    return this.http.post<Alumno>(`${this.urlEndPoint}/${id}`, alumno, {headers: this.httpHeaders})
  }

  getAlumno(id): Observable<Alumno>{
    return this.http.get<Alumno>(`${this.urlEndPoint}/${id}`)
  }

  update(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${this.urlEndPoint}/${alumno.id}`, alumno, {headers: this.httpHeaders})
  }
  
  delete(id: number): Observable<Alumno>{
    return this.http.delete<Alumno>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}