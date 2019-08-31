import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/model/Petitions/User';
import Swal from 'sweetalert2';

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
    let cont = 0;
    this.users.forEach(item => {
      if(item.username === this.usuario.getUsername() && item.password === this.usuario.getPassword()){
        usuario.setStatusLogin(true);
        this.usuarioLogeado.emit(usuario);
      }else{
        cont++;
      }

      if(cont != this.users.length){
        Swal.fire('Inicio de sesion exitoso!!','Usuario logeado correctamente','success');
      }else{
        Swal.fire('Inicio de sesion fallido','Ingrese credenciales validas','error');
      }
    })
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
