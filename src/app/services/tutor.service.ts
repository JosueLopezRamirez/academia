import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Tutor } from '../model/Tutor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private urlEndPoint: string = 'http://localhost:8080/excellence/api/tutores';
  // private urlEndPoint: string = 'http://localhost:8081/api/tutores';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getTutores(): Observable<Tutor[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Tutor[])
    );
  }
  
  create(tutor: Tutor) : Observable<Tutor> {
    return this.http.post<Tutor>(this.urlEndPoint, tutor, {headers: this.httpHeaders})
  }

  getTutor(id): Observable<Tutor>{
    return this.http.get<Tutor>(`${this.urlEndPoint}/${id}`)
  }

  update(tutor: Tutor): Observable<Tutor>{
    return this.http.put<Tutor>(`${this.urlEndPoint}/${tutor.id}`, tutor, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Tutor>{
    return this.http.delete<Tutor>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
