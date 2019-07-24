import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';
import { Login } from './components/login/Login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  login: Login = new Login();

  usuarioLogeado: Usuario;//Instancia del modelo Usuario

  //Metodos
  setLogeado(usuario: Usuario){
    //Tomando los valores de la clase modelo Usuario y asignandolos a nuestra instancia
    //Comparar y ver si el usuario de encuentra registrado en el sistema
    this.usuarioLogeado = new Usuario(
                          usuario.getUsername(),
                          usuario.getPassword(),
                          usuario.getStatusLogin(),
                          usuario.getCategory()
                        );
    //Asignamos el estado del usuario y se define si este se hara un cambio de componente
    this.login.setLoginStatus(this.usuarioLogeado.getStatusLogin())
  }

  getLoginStatus(): boolean{
    return this.login.getLoginStatus();
  }
}
