import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/recepcion/registro/registro.component';
import { RecordComponent } from './components/recepcion/record/record.component';
import { GreenCardComponent } from './components/recepcion/green-card/green-card.component';
import { EstadoCuentaComponent } from './components/administracion/estado-cuenta/estado-cuenta.component';
import { ReportesComponent } from './components/administracion/reportes/reportes.component';

const routes: Routes = [
  {path:'', component: RegistroComponent, pathMatch: 'full'},
  {path:'registro', component: RegistroComponent},
  {path:'record', component: RecordComponent},
  {path:'historial', component: GreenCardComponent},
  {path:'estado-cuenta', component: EstadoCuentaComponent},
  {path:'mantenimiento', component: ReportesComponent}

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
