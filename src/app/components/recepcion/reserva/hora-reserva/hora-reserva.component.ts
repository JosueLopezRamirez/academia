import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hora-reserva',
  templateUrl: './hora-reserva.component.html',
  styleUrls: ['./hora-reserva.component.css']
})
export class HoraReservaComponent implements OnInit {

  @Input() titulo: string;
  @Input() fecha: string;
  @Input() hora: string;
  // @Input() linkActive: string;
  // @Input() redirect: string;

  constructor() { }

  ngOnInit() {
  }

}
