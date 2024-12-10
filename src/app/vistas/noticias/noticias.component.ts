import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = [];  // Array para almacenar las noticias
  errorMessage: string = '';  // Para manejar los errores

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias(): void {
    this.noticiasService.obtenerNoticias().subscribe({
      next: (data) => {
        this.noticias = data;  // Almacenar las noticias en la variable
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar las noticias';
        console.error('Error: ', err);
      }
    });
  }
}
