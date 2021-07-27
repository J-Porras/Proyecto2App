import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario-service/usuario.service';
@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  constructor(public serviceUsuario:UsuarioService) { }

  ngOnInit(): void {
    this.serviceUsuario.getAllUsers();
  }
  

}
