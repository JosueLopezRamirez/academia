import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/model/Plan';
import { Titular } from 'src/app/model/Titular';
import { Alumno } from 'src/app/model/Alumno';
import { Cliente } from 'src/app/model/Cliente';
import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  planes:Plan[];

  private personaTitular: Persona = new Persona();
  private personaAlumno: Persona = new Persona();
  private titular: Titular = new Titular();
  private alumno: Alumno = new Alumno();
  private clienteTitular: Cliente = new Cliente();
  private clienteAlumno: Cliente = new Cliente();
  private planSeleccionado: Plan = new Plan();

  private personaService: PersonaService;
  
  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.planService.getPlan().subscribe(
      plan => this.planes = plan
    );
  }

  selectedPlan:Number;
  
  selected(){
    // console.log(this.selectedPlan);
    for(let i = 0; i < this.planes.length; i++){
      if(this.planes[i].cantidadMeses == this.selectedPlan){
        // console.log(this.planes[i]);
        this.planSeleccionado.valorTotal = this.planes[i].valorTotal;
        this.planSeleccionado.inscripcion = this.planes[i].inscripcion;
        this.planSeleccionado.costoMensual = this.planes[i].costoMensual;
      }
    }
    // console.log(this.planSeleccionado);
  }
  
  selectedForma;

  // selectedFormaPago(){
  //   for(let i = 0; i < this.planes.length; i++){
  //     if(this.planes[i].cantidadMeses == this.selectedPlan){
  //       // console.log(this.planes[i]);
  //       this.planSeleccionado.valorTotal = this.planes[i].valorTotal;
  //       this.planSeleccionado.inscripcion = this.planes[i].inscripcion;
  //       this.planSeleccionado.costoMensual = this.planes[i].costoMensual;
  //     }
  //   }
  // }
  // forma:Array<Object> = [
  //     {id: 0, name: "Tarjeta Banpro"},
  //     {id: 1, name: "Tarjeta Bac"},
  //     {id: 2, name: "Tarjeta Bancentro"},
  //     {id: 3, name: "Tarjeta Visa"},
  //     {id: 4, name: "Tarjeta Mastercard"},
  //     {id: 5, name: "Efectivo"},
  //     {id: 6, name: "Cheque"},
  // ];
}
