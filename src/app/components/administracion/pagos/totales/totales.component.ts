import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/model/Petitions/Pagos';
import { MensualidadService } from 'src/app/services/mensualidad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EfectuarPago } from 'src/app/model/Petitions/EfectuarPago';
import Swal from 'sweetalert2';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-totales',
  templateUrl: './totales.component.html'
})
export class TotalesComponent implements OnInit {

  cancelados: Pagos[];
  constructor(private mensualidadService: MensualidadService,private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mensualidadService.getMensualidades().subscribe(response => this.cancelados = response)
  }


  realizarPago(id:number):void {
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
    pdf.text("Historial de todas las mensualidades",10,10)
    pdf.fromHTML(id,10,15)
    pdf.save("Historial-Mensualidad-Total.pdf")
  }

}
