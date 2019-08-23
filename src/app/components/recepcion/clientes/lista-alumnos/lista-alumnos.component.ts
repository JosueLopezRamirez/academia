import { Component, OnInit } from '@angular/core';
import { AlumnoDatos } from 'src/app/model/Petitions/AlumnoDatos';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: AlumnoDatos[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.getAlumnoInfo().subscribe(
      alumno => this.alumnos = alumno
    );
  }

}
