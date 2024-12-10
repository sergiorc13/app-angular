import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddNoticiasService } from 'src/app/services/add-noticias.service';

@Component({
  selector: 'app-form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent {
  noticiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addnoticiasService: AddNoticiasService,
    public dialogRef: MatDialogRef<FormNoticiasComponent>
  ) {
    this.noticiaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      contenido: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.noticiaForm.valid) {
      const noticia = {
        //Añadir los campos del formulario
        titulo: this.noticiaForm.get('titulo')!.value,
        contenido: this.noticiaForm.get('contenido')!.value,
        dia_anadido: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
        usuario: 'anónimo' // Usuario por defecto
      };

      this.addnoticiasService.insertarNoticia(noticia).subscribe({
        next: (response) => {
          console.log('Noticia insertada:', response);
          this.dialogRef.close(noticia); // Cerrar el modal y devolver la noticia
          window.location.reload();          
        },
        error: (err) => {
          console.error('Error al insertar noticia:', err);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Cerrar el modal sin guardar nada
  }
}
