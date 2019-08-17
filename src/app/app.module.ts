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
// import { HeaderComponent } from './components/header/header.component';
import { ReservaComponent } from './components/recepcion/reserva/reserva.component';
import { PanelComponent } from './components/panel/panel.component';
import { RecordComponent } from './components/recepcion/record/record.component';
import { RegistroComponent } from './components/recepcion/registro/registro.component';
import { GreenCardComponent } from './components/recepcion/green-card/green-card.component';
import { ReservaModule } from './components/recepcion/reserva/reserva.module';
import { EstadoCuentaComponent } from './components/administracion/estado-cuenta/estado-cuenta.component';
import { ReportesComponent } from './components/administracion/reportes/reportes.component';
import { FormRegistroReservaComponent } from './components/recepcion/form-registro-reserva/form-registro-reserva.component';
import { PersonaService } from './services/persona.service';
import { ClienteService } from './services/cliente.service';
import { TitularService } from './services/titular.service';
import { AlumnoService } from './services/alumno.service';
import { ContratoService } from './services/contrato.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HeaderComponent,
    ReservaComponent,
    PanelComponent,
    RecordComponent,
    RegistroComponent,
    GreenCardComponent,
    EstadoCuentaComponent,
    ReportesComponent,
    FormRegistroReservaComponent
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
  providers: [
    PersonaService,
    ClienteService,
    TitularService,
    AlumnoService,
    ContratoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
