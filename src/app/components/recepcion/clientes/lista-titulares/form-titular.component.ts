import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { Titular } from 'src/app/model/Titular';
import { ClienteDTO } from 'src/app/model/DTO/ClienteDTO';
import { Correo } from 'src/app/model/Correo';
import { Telefono } from 'src/app/model/Telefono';
import { PersonaService } from 'src/app/services/persona.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TelefonoService } from 'src/app/services/telefono.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CorreoService } from 'src/app/services/correo.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import Swal from 'sweetalert2';
import { TitularService } from 'src/app/services/titular.service';

@Component({
  selector: 'app-form-titular',
  templateUrl: './form-titular.component.html',
  styleUrls: ['./form-titular.component.css']
})
export class FormTitularComponent implements OnInit {

  private personaTitular: Persona = new Persona(null,"","");
  private titular: Titular = new Titular();
  private clienteTitularDTO: ClienteDTO = new ClienteDTO();
  private telefonoTitular: Telefono = new Telefono();
  private correoTitular: Correo = new Correo();

  constructor(private personaService:PersonaService,private clienteService:ClienteService,private telefonoService:TelefonoService,
    private correoService:CorreoService,private titularService: TitularService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let titular_id = params['id']
      let cliente_id;
      if(titular_id){
        this.titularService.getTitular(titular_id).subscribe((titular) => {
          this.titular = titular
          // console.log(alumno.cliente.id)
          cliente_id = titular.cliente.id;
          this.clienteService.getCliente(cliente_id).subscribe( cliente => {
            this.clienteTitularDTO.id = cliente.id
            this.clienteTitularDTO.cedula = cliente.cedula
            this.clienteTitularDTO.direccion = cliente.direccion
            this.clienteTitularDTO.persona_id = cliente.persona.id
            // Llamando al correo correspondiente de la persona
            this.telefonoService.getTelefono(cliente.id).subscribe(telefono => this.telefonoTitular = telefono)
            this.correoService.getCorreo(cliente.id).subscribe(correo => this.correoTitular = correo)
            
            // Llamando al servicio persona
            this.personaService.getPersona(cliente.persona.id).subscribe(persona => this.personaTitular = persona)
          })
        })
      }
    })
  }

  update():void{
    this.titularService.update(this.titular).subscribe(
      alumno => {
        console.log(alumno);        
        this.router.navigate(['/lista/titulares'])
        Swal.fire('Titular Actualizado',`Titular ${this.personaTitular.nombre} actualizado con exito!`,'success')
      }
    )
    this.clienteService.update(this.clienteTitularDTO).subscribe(
      cliente =>{
        console.log(cliente);
      }
    )
    this.telefonoService.update(this.telefonoTitular).subscribe(telefono => console.log(telefono));
    this.correoService.update(this.correoTitular).subscribe(correo => console.log(correo));
    this.personaService.update(this.personaTitular).subscribe(persona => console.log(persona));
  }

}
