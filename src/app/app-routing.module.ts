import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NuevoLinkComponent } from './component/nuevo-link/nuevo-link.component';
import { AppComponent } from './app.component';

//las rutas mas especificas van mas arriba
const routes: Routes = [
  
  { path: 'nuevoLink',
   component: NuevoLinkComponent
  },
    //path:'**'//wildcard
  //{ path: '', component: AppComponent },
  //path con parametros ejem:    { path: 'profile/:username', component: Componente },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
