import { Component, OnInit } from '@angular/core';
import { TitularDatos } from 'src/app/model/Petitions/TitularDatos';
import { TitularService } from 'src/app/services/titular.service';
import Swal from 'sweetalert2';
import { Titular } from 'src/app/model/Titular';

@Component({
  selector: 'app-lista-titulares',
  templateUrl: './lista-titulares.component.html',
  styleUrls: ['./lista-titulares.component.css']
})
export class ListaTitularesComponent implements OnInit {

  titulares: TitularDatos[];

  constructor(private titularService: TitularService) { }

  ngOnInit() {
    this.titularService.getTitularInfo().subscribe(
      titular => this.titulares = titular
    );
  }

  delete(titular: TitularDatos): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro?',
      text: `Seguro que desea eliminar al titular ${titular.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.titularService.delete(titular.titular_id).subscribe(
          response => {
            this.titulares = this.titulares.filter(cli => cli !== titular)
            swalWithBootstrapButtons.fire(
              'Titular Eliminado!',
              'El titular a sido borrado con exito!!',
              'success'
            )
          }
        )
      }
    })
  }

}
