import { Component, OnInit } from '@angular/core';
import { Pagos } from 'src/app/model/Petitions/Pagos';
import { MensualidadService } from 'src/app/services/mensualidad.service';

@Component({
  selector: 'app-atrasado',
  templateUrl: './atrasado.component.html'
})
export class AtrasadoComponent implements OnInit {

  atrasados: Pagos[];

  constructor(private mensualidadService: MensualidadService) { }

  ngOnInit() {
    this.mensualidadService.getAtrasados().subscribe(response => {
      this.atrasados = response
      // console.log(response)
      console.log(this.atrasados)
    })
    // console.log(this.atrasados)
  }

}
