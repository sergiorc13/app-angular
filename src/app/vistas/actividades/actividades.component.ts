import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})


export class ActividadesComponent {
  filtroSeleccionado: string = 'todas'; // Valor inicial para mostrar todas las actividades

  constructor(public infoService: InfoPaginaService) {}

  // Método para filtrar actividades por tipo
  getActividadesPorTipo(tipo: string): any[] {
    if (this.filtroSeleccionado === 'todas') {
      return this.infoService.actividades;
    }
    return this.infoService.actividades.filter(actividad => actividad.tipo === tipo);
  }
}