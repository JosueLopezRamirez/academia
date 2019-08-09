import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { DiaComponent } from './dia/dia.component';

@NgModule({
  declarations: [
    DiaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
