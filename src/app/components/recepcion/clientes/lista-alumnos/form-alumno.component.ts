import { Component, OnInit } from '@angular/core';
import { Correo } from 'src/app/model/Correo';
import { Telefono } from 'src/app/model/Telefono';
import { ClienteDTO } from 'src/app/model/DTO/ClienteDTO';
import { Alumno } from 'src/app/model/Alumno';
import { Persona } from 'src/app/model/Persona';
import {Router, ActivatedRoute} from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TelefonoService } from 'src/app/services/telefono.service';
import { CorreoService } from 'src/app/services/correo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html'
})
export class FormAlumnoComponent implements OnInit {

  private personaAlumno: Persona = new Persona(null,"","");
  private alumno: Alumno = new Alumno();
  private clienteAlumnoDTO: ClienteDTO = new ClienteDTO();
  private telefonoAlumno: Telefono = new Telefono();
  private correoAlumno: Correo = new Correo();

  constructor(private personaService:PersonaService,private clienteService:ClienteService,private telefonoService:TelefonoService,
    private correoService:CorreoService,private alumnoService: AlumnoService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let alumno_id = params['id']
      let cliente_id;
      if(alumno_id){
        this.alumnoService.getAlumno(alumno_id).subscribe((alumno) => {
          this.alumno = alumno
          // console.log(alumno.cliente.id)
          // cliente_id = alumno.cliente.id;
          this.clienteService.getCliente(cliente_id).subscribe( cliente => {
            this.clienteAlumnoDTO.id = cliente.id
            this.clienteAlumnoDTO.cedula = cliente.cedula
            this.clienteAlumnoDTO.direccion = cliente.direccion
            this.clienteAlumnoDTO.persona_id = cliente.persona.id
            // Llamando al servicio persona
            this.personaService.getPersona(cliente.persona.id).subscribe(persona => this.personaAlumno = persona)
          })
          this.telefonoService.getTelefono(cliente_id).subscribe(telefono => this.telefonoAlumno = telefono)
          this.correoService.getCorreo(cliente_id).subscribe(correo => this.correoAlumno = correo)
        })
      }
    })
  }

  update():void{
    this.alumnoService.update(this.alumno).subscribe(
      alumno => {
        console.log(alumno);        
        this.router.navigate(['/lista/alumnos'])
        Swal.fire('Alumno Actualizado',`Alumno ${this.personaAlumno.nombre} actualizado con exito!`,'success')
      }
    )
    this.clienteService.update(this.clienteAlumnoDTO).subscribe(
      cliente =>{
        console.log(cliente);
      }
    )
    this.telefonoService.update(this.telefonoAlumno).subscribe(telefono => console.log(telefono));
    this.correoService.update(this.correoAlumno).subscribe(correo => console.log(correo));
    this.personaService.update(this.personaAlumno).subscribe(persona => console.log(persona));
  }
}
