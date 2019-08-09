import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaComponent } from './dia/dia.component';
import { ReservaComponent } from './reserva.component';


const routes: Routes = [
  {path: 'reserva', component: ReservaComponent,
  children: [
    {path:'',component: DiaComponent},
    {path:':martes',component: DiaComponent},
    {path:':miercoles',component: DiaComponent},
    {path:':jueves',component: DiaComponent},
    {path:':viernes',component: DiaComponent},
    {path:':sabado',component: DiaComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
