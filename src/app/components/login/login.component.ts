import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //Objeto Usuario
  usuario: Usuario = new Usuario("","",false,0);

  //Objeto que emitira el evento al componente padre
  @Output() usuarioLogeado = new EventEmitter();

  onUsuarioLogeado(usuario: Usuario){
    usuario.setStatusLogin(true);
    this.usuarioLogeado.emit(usuario);
    console.log("Login Exitoso..");
  }

  ngOnInit() {

  }

  constructor() {
    console.log("LoginComponent Cargado Exitosamente...");
  }

  // Definiendo las variables
  texto = "Iniciar Sesion";
}
