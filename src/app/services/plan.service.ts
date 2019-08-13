import { Injectable } from '@angular/core';
import { Plan } from '../model/Plan';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  private urlEndPoint:string = "http://localhost:8080/excellence/api/plan";

  getPlan(): Observable<Plan[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (res) => res as Plan[])
    );
  }
}