import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/shared/salas-service/sala.service';
import { Sala } from 'src/app/shared/salas-service/sala.model';

@Component({
  selector: 'app-new-sala-form',
  templateUrl: './new-sala-form.component.html',
  styleUrls: ['./new-sala-form.component.css']
})
export class NewSalaFormComponent implements OnInit {
  
  idSala:number;
  salaForm:Sala = new Sala();
  constructor(public salaService: SalaService) { }

  ngOnInit(): void {
   this.setIDplaceholder()
  }

  async setIDplaceholder(){
    await this.salaService.getAllSalas();
    this.idSala = this.salaService.listSalas[this.salaService.listSalas.length - 1].Id + 1;

  }

  //submit de formulario nueva sala
  onSubmit(){

  }



}

