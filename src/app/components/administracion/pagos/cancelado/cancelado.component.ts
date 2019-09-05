import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/model/Petitions/Pagos';
import { MensualidadService } from 'src/app/services/mensualidad.service';
import { Pago } from 'src/app/model/Petitions/Pago';
import { EfectuarPago } from 'src/app/model/Petitions/EfectuarPago';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-cancelado',
  templateUrl: './cancelado.component.html',
  styleUrls: ['./cancelado.component.css']
})
export class CanceladoComponent implements OnInit {


  cancelados: Pagos[];
  pago: Pago = new Pago();
  constructor(private mensualidadService: MensualidadService,private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let fecha = new Date();
    
    this.pago.fecha_inicio = `${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01`;
    if((fecha.getMonth() + 1) <= 8){
      this.pago.fecha_fin = `${fecha.getFullYear()}-0${fecha.getMonth() + 2}-01`;
    }else{
      this.pago.fecha_fin = `${fecha.getFullYear()}-${fecha.getMonth() + 2}-01`;
    }
    console.log(this.pago)
    this.mensualidadService.getCancelados(this.pago).subscribe(response => this.cancelados = response)
  }


  cancelarPago(id:number):void {
    let pago: EfectuarPago = new EfectuarPago();
    pago.id = id;
    pago.pagado = false;
    this.mensualidadService.cambiarEstado(pago).subscribe(response => {
      console.log(response)
      if(response != null){
        this.router.navigate(['/pagos'])
        Swal.fire('Pago Cancelado',`Pago cancelado con exito!!`,'success')
      }
    })
  }

  generarPDF(){
    let id = document.getElementById("pendiente")
    let pdf = new jsPDF()
    pdf.text("Mensualidades canceladas en el mes corriente",10,10)
    pdf.fromHTML(id,10,15)
    pdf.save("Cancelado.pdf")
  }
}
