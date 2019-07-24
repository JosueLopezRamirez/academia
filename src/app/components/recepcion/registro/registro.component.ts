import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedPlan;
  plan:Array<Object> = [
      {id: 0, name: 4},
      {id: 1, name: 6},
      {id: 2, name: 8},
      {id: 3, name: 10},
      {id: 4, name: 12},
      {id: 5, name: 13},
      {id: 6, name: 15},
  ];
  
  selectedForma;
  forma:Array<Object> = [
      {id: 0, name: "Tarjeta Banpro"},
      {id: 1, name: "Tarjeta Bac"},
      {id: 2, name: "Tarjeta Bancentro"},
      {id: 3, name: "Tarjeta Visa"},
      {id: 4, name: "Tarjeta Mastercard"},
      {id: 5, name: "Efectivo"},
      {id: 6, name: "Cheque"},
  ];
}
