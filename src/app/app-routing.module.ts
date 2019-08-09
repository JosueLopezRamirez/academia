import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/recepcion/registro/registro.component';
import { ReservaComponent } from './components/recepcion/reserva/reserva.component';
import { RecordComponent } from './components/recepcion/record/record.component';
import { GreenCardComponent } from './components/recepcion/green-card/green-card.component';
import { EstadoCuentaComponent } from './components/administracion/estado-cuenta/estado-cuenta.component';
import { ReportesComponent } from './components/administracion/reportes/reportes.component';
import { DiaComponent } from './components/recepcion/reserva/dia/dia.component';

const routes: Routes = [
  {path:'registro', component: RegistroComponent},
  {path:'reserva', component: ReservaComponent},
  {path:'record', component: RecordComponent},
  {path:'historial', component: GreenCardComponent},
  {path:'estado-cuenta', component: EstadoCuentaComponent},
  {path:'reportes', component: ReportesComponent}
  // {path:'', component: ReservaComponent}
  
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
