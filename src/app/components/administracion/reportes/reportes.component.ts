import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pdfSrc: string = "http://localhost:8081/api/manual-ayuda"

}
