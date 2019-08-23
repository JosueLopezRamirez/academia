import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaTitularesComponent } from './lista-titulares/lista-titulares.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ClientePrincipalComponent } from './cliente-principal.component';
import { FormAlumnoComponent } from './lista-alumnos/form-alumno.component';
import { FormTitularComponent } from './lista-titulares/form-titular.component';

@NgModule({
  declarations: [ListaTitularesComponent, ListaAlumnosComponent, ClientePrincipalComponent, FormAlumnoComponent, FormTitularComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ClientesModule { }
