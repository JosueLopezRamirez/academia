import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientePrincipalComponent } from './cliente-principal.component';
import { ListaTitularesComponent } from './lista-titulares/lista-titulares.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormAlumnoComponent } from './lista-alumnos/form-alumno.component';
import { FormTitularComponent } from './lista-titulares/form-titular.component';

const routes: Routes = [
  {path:'lista',component: ClientePrincipalComponent,
  children: [
    {path: '',component: ListaTitularesComponent},
    {path: 'titulares',component: ListaTitularesComponent},
    {path: 'alumnos',component: ListaAlumnosComponent}
  ]},
  {path: 'alumnos/form/:id', component: FormAlumnoComponent},
  {path: 'titulares/form/:id', component: FormTitularComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
