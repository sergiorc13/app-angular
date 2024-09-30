import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { AboutComponent } from './vistas/about/about.component';
import { ItemsComponent } from './vistas/items/items.component';
import { BuscarComponent } from './vistas/buscar/buscar.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemsComponent },
  { path: 'search/:termino', component: BuscarComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
  
export class AppRoutingModule { 


}
