import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/model/Petitions/Pagos';
import { MensualidadService } from 'src/app/services/mensualidad.service';
import { Pago } from 'src/app/model/Petitions/Pago';
import * as jsPDF from 'jspdf';
import { EfectuarPago } from 'src/app/model/Petitions/EfectuarPago';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent implements OnInit {

  constructor(private mensualidadService: MensualidadService,private router: Router,
    private activatedRoute: ActivatedRoute) { }

  pendientes: Pagos[];
  pago: Pago = new Pago();

  ngOnInit() {
    let fecha = new Date();
    
    this.pago.fecha_actual = `${fecha.getFullYear()}-0${fecha.getMonth() + 1}-0${fecha.getDay() + 1}`;
    this.pago.fecha_inicio = `${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01`;
    if((fecha.getMonth() + 1) <= 8){
      this.pago.fecha_fin = `${fecha.getFullYear()}-0${fecha.getMonth() + 2}-01`;
    }else{
      this.pago.fecha_fin = `${fecha.getFullYear()}-${fecha.getMonth() + 2}-01`;
    }
    console.log(`Dia tomado con un new Date: -> ${new Date()}`)    
    console.log(`Dia tomado con condicinales: -> ${this.pago.fecha_actual}`)
    // console.log(fecha.getMonth())
    this.mensualidadService.getPendientes(this.pago).subscribe(response => {
      this.pendientes = response
      console.log(this.pendientes)
    })
  }

  generarPDF(){
    let id = document.getElementById("pendiente")
    let pdf = new jsPDF()
    pdf.text("Mensualidades a cobrar en el mes corriente",10,10)
    pdf.fromHTML(id,10,15)
    pdf.save("Pendientes.pdf")
  }

  realizarPago(id:number):void {
    let pago: EfectuarPago = new EfectuarPago();
    pago.id = id;
    pago.pagado = true;
    this.mensualidadService.cambiarEstado(pago).subscribe(response => {
      console.log(response)
      if(response != null){
        this.router.navigate(['/pagos/cancelados'])
        Swal.fire('Pago realizado',`Pago realizado con exito!!`,'success')
      }
    })
  }
}
