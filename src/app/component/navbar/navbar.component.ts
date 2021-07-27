import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario-service/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public serviceUsuario:UsuarioService ){ }

  

  ngOnInit(): void {
    
  }

}
