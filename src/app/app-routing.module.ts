import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './authGuard/auth-guard.service';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';

import { NuevoLinkComponent } from './pages/nuevo-link/nuevo-link.component';
import { PageSalasComponent } from './pages/page-salas/page-salas.component';
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
    component: LoginScreenComponent,canActivate:[AuthGuardService]
  },
  {
    path:'Salas',
    component: PageSalasComponent, canActivate:[AuthGuardService]

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
        disallowedRoutes:["localhost:4200/Salas"]

      }
    })

  ],
  providers:[AuthGuardService],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
