import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.inteface';

@Injectable({
  providedIn: 'root'
})
  
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        
      })
  }

   private cargarEquipo() {
      this.http.get('https://cliente-fdd75-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
          .subscribe((resp: any) => {
            this.equipo = resp;
          })
  }
 
}
