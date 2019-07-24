import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.css']
})
export class GreenCardComponent implements OnInit {

  alumno: string = "Josue Ismael Lopez Ramirez";
  codigo: string = '';
  telefono: string = '';
  celular: string = '';

  constructor() { }

  ngOnInit() {
  }

}
