import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { AboutComponent } from './vistas/about/about.component';
import { ItemsComponent } from './vistas/items/items.component';
import { BuscarComponent } from './vistas/buscar/buscar.component';
import { LoginComponent } from './vistas/login/login.component';
import { ActividadesComponent } from './vistas/actividades/actividades.component';
import { NoticiasComponent } from './vistas/noticias/noticias.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'item/:id', component: ItemsComponent },
  { path: 'search/:termino', component: BuscarComponent },
  { path: 'perfil', component: PerfilComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
  
export class AppRoutingModule { 


}
