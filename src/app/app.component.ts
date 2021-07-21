import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ng add @angular/cdk
  title = 'Proyecto2App';

  displayModalLogin = false;


   
  constructor() {}
  /*
  //togglers
  toggleModalLogin = false;


  clickModalLogin(){
    this.toggleModalLogin = !this.toggleModalLogin;
  }*/




  //https://www.youtube.com/watch?v=Fk12ELJ9Bww github VS Code
}
