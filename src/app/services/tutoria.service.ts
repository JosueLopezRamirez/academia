import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Tutoria } from '../model/Tutoria';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutoriaService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/tutorias';
  // private urlEndPoint: string = 'http://localhost:8081/api/personas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getTutorias(): Observable<Tutoria[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Tutoria[])
    );
  }
  
  create(tutoria: Tutoria) : Observable<Tutoria> {
    return this.http.post<Tutoria>(this.urlEndPoint, tutoria, {headers: this.httpHeaders})
  }

  getTutoria(id): Observable<Tutoria>{
    return this.http.get<Tutoria>(`${this.urlEndPoint}/${id}`)
  }

  update(tutoria: Tutoria): Observable<Tutoria>{
    return this.http.put<Tutoria>(`${this.urlEndPoint}/${tutoria.id}`, tutoria, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Tutoria>{
    return this.http.delete<Tutoria>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
