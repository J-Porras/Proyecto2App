import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from './usuario.model';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  readonly baseURL ="https://localhost:44375/";
  response:any;

  usuarioActual:Usuario;
  listUsuarios:Usuario[];

  async getUserbyId(id:string){
    this.response = await this.http.get(this.baseURL+"api/Usuario/user").toPromise();
    let  jsonResponse = JSON.stringify(this.response);
  }

  async getAllUsers(){
    this.response = await this.http.get(this.baseURL+"api/Usuario/List").toPromise()
    this.listUsuarios = JSON.parse(this.response);
    
  }

  getUsuarioActual(){
    return this.usuarioActual;
  }

}
