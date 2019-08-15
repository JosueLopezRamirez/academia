import { Component, OnInit } from '@angular/core'
import { PlanService } from 'src/app/services/plan.service'
import { Plan } from 'src/app/model/Plan'
import { Titular } from 'src/app/model/Titular'
import { Alumno } from 'src/app/model/Alumno'
import { Cliente } from 'src/app/model/Cliente'
import { Persona } from 'src/app/model/Persona'
import { PersonaService } from '../../../services/persona.service'
import { FormaService } from 'src/app/services/forma.service'
import { Forma } from 'src/app/model/Forma'
import { Telefono } from 'src/app/model/Telefono'
import { Correo } from 'src/app/model/Correo'
import { Router } from '@angular/router'
import { ClienteService } from '../../../services/cliente.service'
import { ClienteDTO } from 'src/app/model/DTO/ClienteDTO'
import Swal from 'sweetalert2';
import { TitularService } from 'src/app/services/titular.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TitularDTO } from 'src/app/model/DTO/TitularDTO';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Variables que serviran para obtener el objeto seleccionado de los combobox
  selectedPlan:Number;
  selectedForma:string;

  // Arreglos que se llenaran con la respuesta de la API
  planes: Plan[];
  formas: Forma[];

  // Definiendo objetos de tablas con atributos unicos
  private personaTitular: Persona = new Persona();
  private personaAlumno: Persona = new Persona();
  private titular: TitularDTO = new TitularDTO();
  private alumno: Alumno = new Alumno();

  private clienteTitularDTO: ClienteDTO = new ClienteDTO();
  private clienteAlumnoDTO: ClienteDTO = new ClienteDTO();

  private telefonoTitular: Telefono = new Telefono();
  private telefonoAlumno: Telefono = new Telefono();
  private correoTitular: Correo = new Correo();
  private correoAlumno: Correo = new Correo();
  // Definiendo objetos de tablas catalogos
  private planSeleccionado: Plan = new Plan();
  
  // Instanciar servicios a utilizar

  constructor(private personaService: PersonaService,private clienteService: ClienteService,
    private titularService: TitularService,private alumnoService: AlumnoService,private planService: PlanService,
    private formaService: FormaService, private router: Router){ }

  ngOnInit() {
    // Llenar el combobox del select de meses
    this.planService.getPlan().subscribe(
      plan => this.planes = plan
    );

    // Llenar el combobox del select de forma de pagos
    this.formaService.getForma().subscribe(
      forma => this.formas = forma
    );
  }

  // Metodos que se llaman desde los dos combobox
  // -------------------------------------------------------------------------------
  selected(){
    for(let i = 0; i < this.planes.length; i++){
      if(this.planes[i].cantidadMeses == this.selectedPlan){
        this.planSeleccionado.valorTotal = this.planes[i].valorTotal;
        this.planSeleccionado.inscripcion = this.planes[i].inscripcion;
        this.planSeleccionado.costoMensual = this.planes[i].costoMensual;
      }
    }
  }
  
  selectedFormaPago(){
    for(let i = 0; i < this.formas.length; i++){
      if(this.formas[i].descripcion == this.selectedForma){
        console.log(this.formas[i]);
      }
    }
  }
  // -------------------------------------------------------------------------------
  // Metodo para registrar una nueva matricula
  public create(): void{
      // Insertando los valores del titular
      // ----------------------------------------------------------------------
      // this.personaService.create(this.personaTitular)
      //   .subscribe(persona => {
      //   this.clienteTitularDTO.persona_id = persona.id;
      //   // Ligando dicha persona como un cliente
      //   this.clienteService.create(this.clienteTitularDTO)
      //     .subscribe(cliente => {
      //       // Ligando al titular con el cliente
      //       this.titularService.create(this.titular,cliente.id)
      //         .subscribe(titular => {
      //           console.log(titular);
      //           Swal.fire('Nuevo Titular Registrado', `Titular ${persona.nombre} registrado con exito!`, 'success');
      //         })
      //     });
      // })
      // ----------------------------------------------------------------------
      // Insertando los valores del alumno
      // ----------------------------------------------------------------------
      // console.log(this.personaAlumno)
      this.personaService.create(this.personaAlumno)
        .subscribe(persona => {
          console.log(persona);
        this.clienteAlumnoDTO.persona_id = persona.id;
        // Ligando dicha persona como un cliente
        console.log(this.clienteAlumnoDTO)
        this.clienteService.create(this.clienteAlumnoDTO)
          .subscribe(cliente => {
            // this.alumno.cliente_id = cliente.id
            // Ligando al titular con el cliente
            this.alumno.id = this.titular.id
            this.alumno.nivel = 1;
            this.alumno.activo = true;
            console.log(this.alumno)
            this.alumnoService.create(this.alumno,cliente.id)
              .subscribe(alumno => {
                console.log(alumno);
                Swal.fire('Nuevo Alumno Registrado', `Alumno ${persona.nombre} registrado con exito!`, 'success');
              })
          })
      })
      // ----------------------------------------------------------------------
    
      
    // this.router.navigate(['/registro']);
    // console.log('Formulario enviado')
    
  }
}
