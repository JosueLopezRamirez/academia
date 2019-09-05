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
import { ContratoService } from 'src/app/services/contrato.service';
import { ContratoDTO } from 'src/app/model/DTO/ContratoDTO';
import { EstrategiaService } from 'src/app/services/estrategia.service';
import { Estrategia } from 'src/app/model/Estrategia';
import { AsesorService } from 'src/app/services/asesores.service';
import { Asesor } from 'src/app/model/Asesor';
import { TelefonoService } from 'src/app/services/telefono.service';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Variables que serviran para obtener el objeto seleccionado de los combobox
  valorRestante: Number;
  selectedPlan: Number;
  // fecha:Date;
  selectedForma: string;
  selectedEstrategia: string;
  selectedAsesor: string;
  codigoMatricula:string;
  contrato: ContratoDTO = new ContratoDTO();
  // Arreglos que se llenaran con la respuesta de la API
  planes: Plan[];
  formas: Forma[];
  estrategias: Estrategia[];
  asesores: Asesor[];
  asesorPersona: Persona[];
  // Definiendo objetos de tablas con atributos unicos
  private personaTitular: Persona = new Persona(null,"","");
  private personaAlumno: Persona = new Persona(null,"","");
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

  constructor(private personaService: PersonaService, private clienteService: ClienteService,
    private titularService: TitularService, private alumnoService: AlumnoService,
    private contratoService: ContratoService, private planService: PlanService,
    private formaService: FormaService,private estrategiaService: EstrategiaService,
    private asesorService: AsesorService,
    private telefonoService:TelefonoService,private correoService:CorreoService, private router: Router) { }

  ngOnInit() {
    // Llenar el combobox del select de meses
    this.planService.getPlan().subscribe(plan => this.planes = plan)

    // Llenar el combobox del select de forma de pagos
    this.formaService.getForma().subscribe(forma => this.formas = forma)

    this.estrategiaService.getEstrategia().subscribe(estrategia => this.estrategias = estrategia)
    
    this.asesorService.getAsesores().subscribe(asesor => this.asesores = asesor)
  }

  // -------------------------------------------------------------------------------
  // Metodos que se llaman desde los dos combobox
  // -------------------------------------------------------------------------------
  selected() {
    for (let i = 0; i < this.planes.length; i++) {
      if (this.planes[i].cantidadMeses == this.selectedPlan) {
        this.planSeleccionado.valorTotal = this.planes[i].valorTotal;
        this.planSeleccionado.inscripcion = this.planes[i].inscripcion;
        this.planSeleccionado.costoMensual = this.planes[i].costoMensual;
        this.valorRestante = this.planSeleccionado.valorTotal.valueOf() - this.planSeleccionado.inscripcion.valueOf();
        // ---------------------------------------------
        this.contrato.plan_id = this.planes[i].id;
        console.log(this.contrato)
      }
    }
  }

  selectedFormaPago() {
    for (let i = 0; i < this.formas.length; i++) {
      if (this.formas[i].descripcion == this.selectedForma) {
        this.contrato.forma_id = this.formas[i].id;
      }
    }
    console.log(this.contrato)
  }

  selectedEstrategias(): void {
    this.estrategias.forEach(item => {
      if(item.descripcion == this.selectedEstrategia){
        this.contrato.estrategia_id = item.id;
      }
    })
    console.log(this.contrato)
  }

  selectedAsesores(): void {
    this.asesores.forEach(item => {
      if(item.empleado.persona.nombre == this.selectedAsesor){
        this.contrato.asesor_id = item.id;
      }
    })
    console.log(this.contrato)
  }
  // -------------------------------------------------------------------------------
  // Metodo para registrar una nueva matricula
  public createTitular(): void {
    // ----------------------------------------------------------------------
    // Insertando los valores del titular
    // ----------------------------------------------------------------------
    this.personaService.create(this.personaTitular)
      .subscribe(persona => {
        this.clienteTitularDTO.persona_id = persona.id;
        // Ligando dicha persona como un cliente
        this.clienteService.create(this.clienteTitularDTO)
          .subscribe(cliente => {
            // Ligando al titular con el cliente
            this.titular.id = this.codigoMatricula;
            //Registrar telefono
            this.telefonoService.create(this.telefonoTitular).subscribe(response => console.log(response))
            this.correoService.create(this.correoTitular).subscribe(response => console.log(response))
            this.titularService.create(this.titular, cliente.id)
              .subscribe(titular => {
                Swal.fire(`Titular Registrado`, `Titular ${persona.nombre} registrada con éxito!`, 'success');
              })
          });
      })
  }

  public createAlumno(): void {
    // ----------------------------------------------------------------------
    // Insertando los valores del alumno
    // ----------------------------------------------------------------------    
    this.personaService.create(this.personaAlumno)
      .subscribe(persona => {
        // Ligando dicha persona como un cliente
        this.clienteAlumnoDTO.persona_id = persona.id;
        this.clienteService.create(this.clienteAlumnoDTO)
          .subscribe(cliente => {
            // Ligando al titular con el cliente
            this.alumno.id = this.codigoMatricula;
            this.alumno.nivel = 1;
            this.alumno.activo = true;
            console.log(this.alumno)
            this.alumnoService.create(this.alumno, cliente.id)
              .subscribe(alumno => {
                Swal.fire(`Alumno Registrado`, `Alumno ${persona.nombre} registrada con éxito!`, 'success');
              })
          })
      })
  }

  public create(): void {
    // ----------------------------------------------------------------------
    // Insertando los valores en el contrato
    // ----------------------------------------------------------------------
    this.contrato.asesor_id = 1;
    // this.contrato.estrategia_id = 1;
    this.contrato.alumno_id = this.codigoMatricula;
    this.contrato.titular_id = this.codigoMatricula;
  
    console.log(this.contrato)
    this.contratoService.create(this.contrato)
      .subscribe(_contrato => {
        console.log('Contrato devuelto' + _contrato);
        Swal.fire(`Matricula Registrada`, `Matricula registrada con éxito!`, 'success');
        this.router.navigate(['/record']);
      })
  }

  mostrarfecha(){
    console.log(this.contrato.fechaContrato)
  }
}