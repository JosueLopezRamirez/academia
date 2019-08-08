import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/model/Petitions/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //Objeto Usuario
  usuario: Usuario = new Usuario("","",false,0);
  users: User[];
  //Objeto que emitira el evento al componente padre
  @Output() usuarioLogeado = new EventEmitter();

  onUsuarioLogeado(usuario: Usuario){
    for(let i = 0;i<this.users.length;i++){
      if(this.users[i].username == this.usuario.getUsername() && this.users[i].password == this.usuario.getPassword()){
        usuario.setStatusLogin(true);
        this.usuarioLogeado.emit(usuario);
      }
    }
    console.log("Login Exitoso..");
  }

  ngOnInit() {
    this.loginService.getUsuario().subscribe(
      user => this.users = user
    );
  }

  constructor(private loginService: LoginService) {
    //console.log("LoginComponent Cargado Exitosamente...");
  }

  // Definiendo las variables
  texto = "Iniciar Sesion";
}
