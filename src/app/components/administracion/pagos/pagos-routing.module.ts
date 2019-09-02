import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagosComponent } from './pagos/pagos.component';
import { AtrasadoComponent } from './atrasado/atrasado.component';
import { PendienteComponent } from './pendiente/pendiente.component';
import { CanceladoComponent } from './cancelado/cancelado.component';


const routes: Routes = [
  {path: 'pagos', component: PagosComponent,
  children: [
    {path: '', component: PendienteComponent},
    {path: 'atrasados', component: AtrasadoComponent},
    {path: 'pendientes', component: PendienteComponent},
    {path: 'cancelados', component: CanceladoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosRoutingModule { }
