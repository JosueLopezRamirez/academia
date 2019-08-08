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
import { MainComponent } from './components/main/main.component';
import { PanelComponent } from './components/panel/panel.component';
import { RecordComponent } from './components/recepcion/record/record.component';
import { RegistroComponent } from './components/recepcion/registro/registro.component';
import { GreenCardComponent } from './components/recepcion/green-card/green-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ReservaComponent,
    MainComponent,
    PanelComponent,
    RecordComponent,
    RegistroComponent,
    GreenCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
