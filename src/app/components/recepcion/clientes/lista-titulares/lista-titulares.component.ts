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
        confirmButton: 'btn btn-success m-1',
        cancelButton: 'btn btn-danger m-1'
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
      //codigo que se ejecutara si fue presionado el boton de eliminar del swal
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Titular Dado de Baja!',
          'El titular a sido dado de baja con exito!!',
          'success'
        )
      } else if (
        //codigo en caso de que desee cancelar el dar de baja a un titular
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          `El titular ${titular.nombre} no fue dado de baja`,
          'error'
        )
      }
    })
  }

}
