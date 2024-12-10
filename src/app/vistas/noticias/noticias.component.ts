import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service'; // Servicio para gestionar las noticias
import { MatDialog } from '@angular/material/dialog'; // Importar el servicio para modales
import { FormNoticiasComponent } from './form-noticias/form-noticias.component'; // Componente del formulario

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: any[] = []; // Array para almacenar las noticias
  errorMessage: string = ''; // Para manejar los errores

  constructor(
    private noticiasService: NoticiasService,
    public dialog: MatDialog // Inyectar el servicio MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias(): void {
    this.noticiasService.obtenerNoticias().subscribe({
      next: (data) => {
        this.noticias = data; // Almacenar las noticias en la variable
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar las noticias';
        console.error('Error: ', err);
      }
    });
  }

  // Función para abrir el modal
  abrirModal(): void {
    const dialogRef = this.dialog.open(FormNoticiasComponent, {
      width: '800px', // Ajustar el ancho del modal
      height: '350px' // Ajustar la altura del modal
    });

  }
}
