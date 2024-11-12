import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { AboutComponent } from './vistas/about/about.component';
import { ItemsComponent } from './vistas/items/items.component';
import { BuscarComponent } from './vistas/buscar/buscar.component';
import { LoginComponent } from './vistas/login/login.component';
import { ActividadesComponent } from './vistas/actividades/actividades.component';
import { NoticiasComponent } from './vistas/noticias/noticias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './vistas/registro/registro.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    AboutComponent,
    ItemsComponent,
    BuscarComponent,
    LoginComponent,
    ActividadesComponent,
    NoticiasComponent,
    RegistroComponent,
    PerfilComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
