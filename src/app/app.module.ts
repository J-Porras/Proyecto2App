import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './home/app.component';
import { UsuarioListaComponent } from './component/usuario-lista/usuario-lista.component';
import { ModalLoginComponent } from './component/modal-login/modal-login.component';
import { NuevoLinkComponent } from './pages/nuevo-link/nuevo-link.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { PageSalasComponent } from './pages/page-salas/page-salas.component';
  import { NewSalaFormComponent } from './component/new-sala-form/new-sala-form.component';
import { NomSalaValidatorDirective } from './shared/directivas/nom-sala-validator.directive';
import { SalaListaComponent } from './component/sala-lista/sala-lista.component';
import { PageUsuariosComponent } from './pages/page-usuarios/page-usuarios.component';
import { HeaderInterceptor } from './shared/interceptors/HeaderInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioListaComponent,
    ModalLoginComponent,
    NuevoLinkComponent,
    NavbarComponent,
    LoginScreenComponent,
    PageSalasComponent,
    SalaListaComponent,
    NewSalaFormComponent,
    NomSalaValidatorDirective,
    PageUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
