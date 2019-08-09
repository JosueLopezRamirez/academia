import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Reserva } from 'src/app/model/Reserva';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() texto: string;
  @Input() fecha: string;
  @Input() redirect: string;
  @Input() linkActive: string;

  private reserva: Reserva = new Reserva();

  @Output() botonPresionado = new EventEmitter();

  onbotonPresionado(){
    this.reserva.fecha = this.fecha;
    this.reserva.texto = this.texto;
    this.reserva.title = this.title;
    this.botonPresionado.emit(this.reserva);
  }

  constructor() { }

  ngOnInit() {
  }

}
