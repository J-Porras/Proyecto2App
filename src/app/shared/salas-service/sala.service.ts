import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from "@angular/common/http";
import { Sala } from './sala.model';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  readonly baseURL ="https://localhost:44375/";
  listSalas:Sala[];


  constructor(private http:HttpClient) { }

  async getSalabyId(idsala:number){
    try {
      let response =  await this.http.get(this.baseURL+'api/Sala/sala/${idsala}').toPromise()
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
}
