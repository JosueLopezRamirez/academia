import { Component, OnInit } from '@angular/core';
import { DetalleTutoriaDatos } from 'src/app/model/Petitions/DetalleTutoriaDatos';
import { Alumno } from 'src/app/model/Alumno';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent implements OnInit {

  detalle:DetalleTutoriaDatos[];
  alumno:Alumno = new Alumno();

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  cargarDatos(): void{
    this.activatedRoute.params.subscribe(params => {
      let detalle_id = params['id']
      console.log(detalle_id)
      let cliente_id;
      // if(detalle_id){
      //   this.titularService.getTitular(titular_id).subscribe((titular) => {
      //     this.titular = titular
      //     // console.log(alumno.cliente.id)
      //     cliente_id = titular.cliente.id;
      //     this.clienteService.getCliente(cliente_id).subscribe( cliente => {
      //       this.clienteTitularDTO.id = cliente.id
      //       this.clienteTitularDTO.cedula = cliente.cedula
      //       this.clienteTitularDTO.direccion = cliente.direccion
      //       this.clienteTitularDTO.persona_id = cliente.persona.id
      //       // Llamando al servicio persona
      //       this.personaService.getPersona(cliente.persona.id).subscribe(persona => this.personaTitular = persona)
      //     })
      //     this.telefonoService.getTelefono(cliente_id).subscribe(telefono => this.telefonoTitular = telefono)
      //     this.correoService.getCorreo(cliente_id).subscribe(correo => this.correoTitular = correo)
      //   })
      // }
    })
  }

}
