import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { PagosComponent } from './pagos/pagos.component';
import { AtrasadoComponent } from './atrasado/atrasado.component';
import { PendienteComponent } from './pendiente/pendiente.component';
import { CanceladoComponent } from './cancelado/cancelado.component';


@NgModule({
  declarations: [PagosComponent, AtrasadoComponent, PendienteComponent, CanceladoComponent],
  imports: [
    CommonModule,
    PagosRoutingModule
  ]
})
export class PagosModule { }
