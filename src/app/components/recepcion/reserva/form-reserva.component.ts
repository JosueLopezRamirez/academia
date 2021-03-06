import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/Alumno';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleTutoriaDTO } from 'src/app/model/DTO/DetalleTutoriaDTO';
import { Nivel } from 'src/app/model/Nivel';
import { Tutoria } from 'src/app/model/Tutoria';
import { Tutor } from 'src/app/model/Tutor';
import { Unidad } from 'src/app/model/Unidad';
import { DetalleTutoriaService } from 'src/app/services/detalle-tutoria.service';
import { NivelService } from 'src/app/services/nivel.service';
import { TutorService } from 'src/app/services/tutor.service';
import { TutoriaService } from 'src/app/services/tutoria.service';
import { UnidadService } from 'src/app/services/unidad.service';
import { AlumnoReserva } from 'src/app/model/Petitions/AlumnoReserva';
import { Reserva } from 'src/app/model/Petitions/Reserva';
import { ReservaModel } from 'src/app/model/ReservaModel';
import { AlumnoService } from 'src/app/services/alumno.service';
import { detalleReserva } from 'src/app/model/Petitions/detalleReserva';
import { ReservaModule } from './reserva.module';
import { ReservaService } from 'src/app/services/reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent implements OnInit {

  // Variable para poblar el formulario con los detalles de la tutoria a reservar
  detalle:DetalleTutoriaDTO = new DetalleTutoriaDTO();

  // Variable para realizar la reserva
  alumnos_reserva: Reserva[];
  detalleReserva: detalleReserva = new detalleReserva();

  // Variables para llamar a servicios
  nivel:Nivel = new Nivel();
  tutoria:Tutoria = new Tutoria();
  tutor:Tutor = new Tutor();
  unidad:Unidad = new Unidad();
  alumno:Alumno = new Alumno();

  constructor(private reservaService:ReservaService,private detalleService:DetalleTutoriaService,
    private nivelService:NivelService,private tutoriaService:TutoriaService,
    private tutorService:TutorService,private unidadService:UnidadService,private alumnoService:AlumnoService,
    private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarDatos()
  }

  cargarDatos(): void{
    this.activatedRoute.params.subscribe(params => {
      let detalle_id = params['id']
      // console.log(detalle_id)
      if(detalle_id){
        this.detalleService.getDetalle(detalle_id).subscribe((detalle) => {
          // asignando el detalle de la reserva a nuestro objeto que se mostrara en el formulacion
          this.detalle = detalle
          this.detalleReserva.fecha = this.detalle.fecha
          this.detalleReserva.hora = this.detalle.hora
          this.alumnoService.getAlumnoReserva(this.detalleReserva).subscribe(reserva => this.alumnos_reserva = reserva)
          //Llamando los servicios correspondientes a tablas catalogo que corresponden a la reserva como tal para visualizarlas en el formulario
          this.nivelService.getNivel(this.detalle.nivel_id).subscribe( nivel => this.nivel = nivel)
          this.unidadService.getUnidad(this.detalle.unidad_id).subscribe(unidad => this.unidad = unidad)
          this.tutorService.getTutor(this.detalle.tutor_id).subscribe(tutor => this.tutor = tutor)
          this.tutoriaService.getTutoria(this.detalle.tutoria_id).subscribe(tutoria => this.tutoria = tutoria)
        })
      }
    })
  }

  create(): void{
    let reserva: ReservaModel = new ReservaModel();
  
    reserva.alumno_id = this.alumno.id;
    reserva.detalle_id = this.detalle.id;
    reserva.aprovada = false;
    reserva.reprogramada = false;
    console.log(reserva)
    this.reservaService.create(reserva).subscribe(reserva => {
      Swal.fire('Reserva Exitosa!!',`El alumno reservo con exito!`,'success')
      this.router.navigate([`/reserva`])
    })
  }
}