import { Component, OnInit } from '@angular/core';
import { EstadoCuenta } from 'src/app/model/DTO/EstadoCuenta';
import { MensualidadService } from 'src/app/services/mensualidad.service';
import { Persona } from 'src/app/model/Persona';
import { Titular } from 'src/app/model/Titular';
import { ClienteDTO } from 'src/app/model/DTO/ClienteDTO';
import { Telefono } from 'src/app/model/Telefono';
import { Correo } from 'src/app/model/Correo';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { TelefonoService } from 'src/app/services/telefono.service';
import { CorreoService } from 'src/app/services/correo.service';
import { TitularService } from 'src/app/services/titular.service';
import { PersonaService } from 'src/app/services/persona.service';
import { EfectuarPago } from 'src/app/model/Petitions/EfectuarPago';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

  private personaTitular: Persona = new Persona(null,"","");
  private titular: Titular = new Titular();
  private clienteTitularDTO: ClienteDTO = new ClienteDTO();
  private telefonoTitular: Telefono = new Telefono();
  private correoTitular: Correo = new Correo();

  historial: EstadoCuenta[];
  constructor(private mensualidadService: MensualidadService,private personaService:PersonaService,
    private clienteService:ClienteService,private telefonoService:TelefonoService,
    private correoService:CorreoService,private titularService: TitularService,
    private router: Router,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.cargarCliente();
  }

  realizarPago(id:number):void {
    let pago: EfectuarPago = new EfectuarPago();
    let estado: EstadoCuenta = new EstadoCuenta();
    let fecha: Date;
    let fechaActual: Date = new Date();
    this.historial.forEach(item => {
      if(item.mensualidad_id == id){
        estado = item;
        console.log(item)
      }
    })
    
    pago.id = id;
    pago.pagado = true;
    
    this.mensualidadService.cambiarEstado(pago).subscribe(response => {
      console.log(response)
      if(response != null){
        this.router.navigate(['/pagos/totales'])
        Swal.fire('Pago realizado',`Pago realizado con exito!!`,'success')   
      }
    })
  }

  cancelarPago(id:number):void {
    let pago: EfectuarPago = new EfectuarPago();
    pago.id = id;
    pago.pagado = false;
    this.mensualidadService.cambiarEstado(pago).subscribe(response => {
      console.log(response)
      if(response != null){
        this.router.navigate(['/pagos'])
        Swal.fire('Pago cancelado',`Pago cancelado con exito!!`,'success')
      }
    })
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let titular_id = params['id']
      let cliente_id;
      if(titular_id){
        this.titularService.getTitular(titular_id).subscribe((titular) => {
          this.titular = titular
          this.mensualidadService.getEstadoCuenta(this.titular.id).subscribe(response => {
            this.historial = response
            console.log(this.historial)
          })
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
}
