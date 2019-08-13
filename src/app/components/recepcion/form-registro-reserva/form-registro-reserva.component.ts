import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/model/Reserva';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-registro-reserva.component.html'
})
export class FormRegistroReservaComponent implements OnInit {

  private reserva: Reserva = new Reserva();

  constructor() { }

  ngOnInit() {
  }


  public reservar(): void{
    console.log("Reserva registrada");
    console.log(this.reserva);
  }
}
