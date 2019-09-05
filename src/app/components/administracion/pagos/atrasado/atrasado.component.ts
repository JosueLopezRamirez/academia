import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/model/Petitions/Pagos';
import { MensualidadService } from 'src/app/services/mensualidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EfectuarPago } from 'src/app/model/Petitions/EfectuarPago';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-atrasado',
  templateUrl: './atrasado.component.html'
})
export class AtrasadoComponent implements OnInit {

  atrasados: Pagos[];

  constructor(private mensualidadService: MensualidadService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mensualidadService.getAtrasados().subscribe(response => {
      this.atrasados = response
      // console.log(response)
      console.log(this.atrasados)
    })
  }

  realizarPago(id:number):void {
    let pago: EfectuarPago = new EfectuarPago();
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

  generarPDF(){
    let id = document.getElementById("pendiente")
    let pdf = new jsPDF()
    pdf.text("Mensualidades atrasadas que deben cobrarse",10,10)
    pdf.fromHTML(id,10,15)
    pdf.save("Atrasados.pdf")
  }
}
