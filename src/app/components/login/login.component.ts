import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //Objeto Usuario
  usuario: Usuario = new Usuario("","",false,0);
  users: Usuario[];
  //Objeto que emitira el evento al componente padre
  @Output() usuarioLogeado = new EventEmitter();

  onUsuarioLogeado(usuario: Usuario){
    usuario.setStatusLogin(true);
    this.usuarioLogeado.emit(usuario);
    console.log("Login Exitoso..");
  }

  ngOnInit() {
    this.loginService.getUsuario().subscribe(
      user => this.users = user
    );
  }

  constructor(private loginService: LoginService) {
    console.log("LoginComponent Cargado Exitosamente...");
    
  }

  // Definiendo las variables
  texto = "Iniciar Sesion";
}
