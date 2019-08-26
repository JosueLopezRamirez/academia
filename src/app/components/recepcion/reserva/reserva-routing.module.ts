import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './reserva.component';
import { FormReservaComponent } from './form-reserva.component';

const routes: Routes = [
  {path: 'reserva', component: ReservaComponent},
  {path: 'reservas/form/:id', component: FormReservaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
