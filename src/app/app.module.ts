import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Modulos
import { MaterialModule } from './material/material.module';

//Modulos de Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ReservaComponent } from './components/recepcion/reserva/reserva.component';
import { PanelComponent } from './components/panel/panel.component';
import { RecordComponent } from './components/recepcion/record/record.component';
import { RegistroComponent } from './components/recepcion/registro/registro.component';
import { GreenCardComponent } from './components/recepcion/green-card/green-card.component';
import { ReservaModule } from './components/recepcion/reserva/reserva.module';
import { EstadoCuentaComponent } from './components/administracion/estado-cuenta/estado-cuenta.component';
import { ReportesComponent } from './components/administracion/reportes/reportes.component';
import { CardComponent } from './components/card/card.component';
//import { BarraDiasComponent } from './components/recepcion/reserva/barra-dias/barra-dias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ReservaComponent,
    PanelComponent,
    RecordComponent,
    RegistroComponent,
    GreenCardComponent,
    EstadoCuentaComponent,
    ReportesComponent,
    CardComponent/*,
    BarraDiasComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReservaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }