import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";
import { Sala } from './sala.model';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  salaForm:Sala = new Sala();
  readonly baseURL ="https://localhost:44375/";
  listSalas:Sala[];


  constructor(private http:HttpClient) { }

  async getSalabyId(idsala:number){
    try {
      let response =  await this.http.get(this.baseURL+'api/Sala/sala/${idsala}',).toPromise()
      return (<Sala>response)
      
    } catch (error) {
      return null;
    }
  }


  async getAllSalas(){
    try {
     

      let response:any = await this.http.get(this.baseURL+"api/Sala/salas").toPromise()
      this.listSalas = JSON.parse(response);
      return;
    } catch (error) {
      return null;
    }
  }

  async postNewSala(content:object){
    let response:any = await this.http.post(this.baseURL+"api/Sala/add",content).toPromise()
    if(JSON.parse(response) == "true"){
      alert("Sala ingresada correctamente")
    }
    else{
      alert("Ocurrió un error, por favor intentalo más tarde")
    }
    
  }
}
