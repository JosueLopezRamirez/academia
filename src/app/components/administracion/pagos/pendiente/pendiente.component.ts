import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/model/Petitions/Pagos';
import { MensualidadService } from 'src/app/services/mensualidad.service';
import { Pago } from 'src/app/model/Petitions/Pago';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent implements OnInit {

  constructor(private mensualidadService: MensualidadService) { }

  pendientes: Pagos[];
  pago: Pago = new Pago();

  ngOnInit() {
    let fecha = new Date();
    this.pago.fecha_actual = `${fecha.getFullYear()}-0${fecha.getMonth() + 1}-0${fecha.getDay()}`;
    this.pago.fecha_inicio = `${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01`;
    this.pago.fecha_fin = `${fecha.getFullYear()}-${fecha.getMonth() + 2}-01`;
    console.log(this.pago)
    // console.log(fecha.getMonth())
    this.mensualidadService.getPendientes(this.pago).subscribe(response => this.pendientes = response)
  }
}
