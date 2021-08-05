import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/usuario-service/usuario.service';
import { Usuario } from 'src/app/shared/usuario-service/usuario.model';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  passwordType: boolean;


  ngOnInit(): void {
  }

  
  closeResult = '';

  constructor(private modalService: NgbModal,public serviceUsuario:UsuarioService) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(formLogin:NgForm){
   // this.serviceUsuario.getUserbyId(this.form)
   const credentials ={
     'id':formLogin.value.Id,
     'contrasenna':formLogin.value.Contrasenna

   }
   
   this.serviceUsuario.loginUser(credentials)
   this.cleanModalLogin();


  }

  cleanModalLogin(){
    this.serviceUsuario.usuarioActual = new Usuario();
  }

  togglePasswordType(){
    this.passwordType = !this.passwordType;

  }

}
