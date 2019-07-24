import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/recepcion/registro/registro.component';
import { ReservaComponent } from './components/recepcion/reserva/reserva.component';
import { RecordComponent } from './components/recepcion/record/record.component';
import { GreenCardComponent } from './components/recepcion/green-card/green-card.component';

const routes: Routes = [
  {path:'registro', component: RegistroComponent},
  {path:'reserva', component: ReservaComponent},
  {path:'record', component: RecordComponent},
  {path:'reportes', component: RecordComponent},
  {path:'historial', component: GreenCardComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
