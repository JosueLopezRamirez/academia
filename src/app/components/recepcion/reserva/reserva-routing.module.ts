import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaComponent } from './dia/dia.component';


const routes: Routes = [
  {path:'lunes',component: DiaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
