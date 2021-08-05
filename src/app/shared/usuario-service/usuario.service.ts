import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient,private router:Router,private jwtHelper:JwtHelperService) { }
  readonly baseURL ="https://localhost:44375/";
  response:any;

  usuarioActual:Usuario = new Usuario();
  listUsuarios:Usuario[];
  invalidLogin: boolean = true;

  async getUserbyId(id:string){
    return await this.http.get(this.baseURL+"api/Usuario/user")//.toPromise();
    //let jsonResponse = JSON.stringify(this.response);

  }

  async getAllUsers(){
    this.response = await this.http.get(this.baseURL+"api/Usuario/List")
    .toPromise()
    this.listUsuarios = JSON.parse(this.response);
    
  }

  getUsuarioActual(){
    return this.usuarioActual;
  }

  isUserAuthenticated(){
    const token: string|null = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }

  }

  logOut(){
    localStorage.removeItem("jwt")
    this.invalidLogin = true;
  }

  loginUser(credentials:object){

    this.http.post(this.baseURL+"api/userLogin",credentials)
    .subscribe(response =>{
      const token = (<any>response);
      localStorage.setItem("jwt",token); 
      this.invalidLogin = false;
      this.router.navigate(["/profileScreen"]);
      //this.usuarioActual = new Usuario();
      
    },err =>{
      this.invalidLogin = true;
    })  
  }

  

}
