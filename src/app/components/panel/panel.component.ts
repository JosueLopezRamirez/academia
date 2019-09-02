import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {


  @Input() usuario: Usuario;
  categoria: number = 0;

  constructor() { }

  ngOnInit() {
    if(this.usuario == undefined){
      this.categoria = 0;
      console.log('Categoria tomada por defecto');
    }else{
      this.categoria = this.usuario.getCategory();
      console.log('Categoria del usuario');
    }
    console.log(this.categoria);
  }

}
