import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginScreenComponent } from './component/login-screen/login-screen.component';

import { NuevoLinkComponent } from './component/nuevo-link/nuevo-link.component';
//https://www.youtube.com/watch?v=HjIpeEzUK_s
//https://github.com/auth0/angular2-jwt
//las rutas mas especificas van mas arriba

export function tokenGetter(){
  return localStorage.getItem("jwt")
}
const routes: Routes = [
  
  { path: 'nuevoLink',
   component: NuevoLinkComponent
  },
  {
    path:'profileScreen',
    component: LoginScreenComponent
  },
    //path:'**'//wildcard
  //{ path: '', component: AppComponent },
  //path con parametros ejem:    { path: 'profile/:username', component: Componente },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:4200"],
        disallowedRoutes:[]

      }
    })

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
