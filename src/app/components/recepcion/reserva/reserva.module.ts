import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { ReservaRoutingModule } from './reserva-routing.module';
import { FormReservaComponent } from './form-reserva.component';

@NgModule({
  declarations: [
    FormReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ReservaModule { }
