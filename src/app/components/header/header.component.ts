import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  title: string[] = ["Recepcion","Administracion"];
  proceso: string[] = ["Registro","Reserva","GreenCards","Record Produccion"];

}
