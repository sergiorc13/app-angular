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

import { FormsModule } from '@angular/forms';
import { FormNoticiasComponent } from './vistas/noticias/form-noticias/form-noticias.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ModificarPerfilComponent } from './vistas/perfil/modificar-perfil/modificar-perfil.component';

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
    FormNoticiasComponent,
    ModificarPerfilComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
