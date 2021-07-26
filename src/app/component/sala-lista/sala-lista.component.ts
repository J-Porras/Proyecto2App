import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/shared/salas-service/sala.service';

@Component({
  selector: 'app-sala-lista',
  templateUrl: './sala-lista.component.html',
  styleUrls: ['./sala-lista.component.css']
})
export class SalaListaComponent implements OnInit {

  constructor(public salaService: SalaService) { }

  ngOnInit(): void {
    this.salaService.getAllSalas();
  }

}
