import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/model/Reserva';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  realizarReserva: Reserva;

  setReserva(reserva: Reserva){
    this.realizarReserva.fecha = reserva.fecha;
    this.realizarReserva.texto = reserva.texto;
    this.realizarReserva.title = reserva.title;
  }

  constructor() {}

  ngOnInit() {

  }
}
