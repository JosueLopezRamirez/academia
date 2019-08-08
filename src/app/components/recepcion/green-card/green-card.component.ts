import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../model/Alumno';
import { Historial } from '../../../model/Historial';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html'
})
export class GreenCardComponent implements OnInit {

  private alumno: Alumno = new Alumno();
  private value: boolean = false;
  constructor() { }
  //this.historial.push();
  ngOnInit() {
  }

  public search(): void{
    this.alumno.codigo = '00001';
    this.alumno.celular = '77209432';
    this.alumno.telefono = '';
    console.log("Clicked");
    console.log(this.alumno);
    this.value = true;
    //this.alumno.nombre = null;
  }

  private historial: Historial[] = [
    {nivel: 1, tutoria:'UR1',aprobado:'Aprovado',horas:1},
    {nivel: 1, tutoria:'CC1',aprobado:'Aprovado',horas:3},
    {nivel: 1, tutoria:'UR2',aprobado:'Aprovado',horas:2},
    {nivel: 1, tutoria:'CC2',aprobado:'Aprovado',horas:2},
    {nivel: 1, tutoria:'UR3',aprobado:'Aprovado',horas:1},
    {nivel: 1, tutoria:'CC3',aprobado:'Aprovado',horas:1},
    {nivel: 1, tutoria:'UR4',aprobado:'Aprovado',horas:1},
    {nivel: 1, tutoria:'CC4',aprobado:'Aprovado',horas:3},
    {nivel: 1, tutoria:'UR5',aprobado:'Aprovado',horas:2},
    {nivel: 1, tutoria:'CC5',aprobado:'Aprovado',horas:1},
  ];
}
