import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { DiaComponent } from './dia/dia.component';
import { HoraReservaComponent } from './hora-reserva/hora-reserva.component';

@NgModule({
  declarations: [
    DiaComponent,
    HoraReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
