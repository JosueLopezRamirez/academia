import { Component, OnInit } from '@angular/core';
import { DetalleTutoriaDatos } from 'src/app/model/Petitions/DetalleTutoriaDatos';
import { DetalleTutoriaService } from 'src/app/services/detalle-tutoria.service';
import { NivelService } from 'src/app/services/nivel.service';
import { DetalleTutoriaDTO } from 'src/app/model/DTO/DetalleTutoriaDTO';
import { Nivel } from 'src/app/model/Nivel';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas:DetalleTutoriaDatos[];
  niveles:Nivel[];
  constructor(private detalleTutoriaService:DetalleTutoriaService,private nivelService:NivelService) {}

  ngOnInit() {
    this.nivelService.getNiveles().subscribe(
      nivel => {
        this.niveles = nivel
        console.log(this.niveles)
      }
    )
    this.detalleTutoriaService.getDetalleTutorias().subscribe(
      tutoria => {
        this.reservas = tutoria
      }
    )
  }
}
