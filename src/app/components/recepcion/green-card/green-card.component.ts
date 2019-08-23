import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../model/Alumno';
import { Historial } from '../../../model/Historial';
import { Persona } from 'src/app/model/Persona';
import { Cliente } from '../../../model/Cliente';
import { Telefono } from 'src/app/model/Telefono';
import { Correo } from 'src/app/model/Correo';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html'
})
export class GreenCardComponent implements OnInit {

  nombreBuscar:string;
  private alumnoPersona: Persona = new Persona(null,"","");
  private alumnoCliente: Cliente = new Cliente();
  private alumnoTelefono: Telefono = new Telefono();
  private alumnoCorreo: Correo = new Correo();
  private alumno: Alumno = new Alumno();
  private value: boolean = false;
  constructor() { 
    this.alumnoPersona.nombre = null;
  }
  ngOnInit() {
  }

  public search(): void{
    this.alumno.id = '00001';
    this.alumnoTelefono.telefono = '77209432';
    // this.alumno.telefono = '';
    console.log("Clicked");
    console.log(this.alumno);
    this.value = true;
    //this.alumno.nombre = null;
  }

  private historial: Historial[] = [
    {nivel: 1, tutoria:'UR1',aprobado:'Aprobado',horas:1},
    {nivel: 1, tutoria:'CC1',aprobado:'Aprobado',horas:3},
    {nivel: 1, tutoria:'UR2',aprobado:'Aprobado',horas:2},
    {nivel: 1, tutoria:'CC2',aprobado:'Aprobado',horas:2},
    {nivel: 1, tutoria:'UR3',aprobado:'Aprobado',horas:1},
    {nivel: 1, tutoria:'CC3',aprobado:'Aprobado',horas:1},
    {nivel: 1, tutoria:'UR4',aprobado:'Aprobado',horas:1},
    {nivel: 1, tutoria:'CC4',aprobado:'Aprobado',horas:3},
    {nivel: 1, tutoria:'UR5',aprobado:'Aprobado',horas:2},
    {nivel: 1, tutoria:'CC5',aprobado:'Aprobado',horas:1},
  ];
}
