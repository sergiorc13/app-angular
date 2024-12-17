import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddNoticiasService } from 'src/app/services/add-noticias.service';
import { AuthService } from 'src/app/services/auth.service';

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
    public dialogRef: MatDialogRef<FormNoticiasComponent>,
    private authService: AuthService
  ) {
    this.noticiaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      contenido: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.noticiaForm.valid) {
      const noticia = {
        
        titulo: this.noticiaForm.get('titulo')!.value,
        contenido: this.noticiaForm.get('contenido')!.value,
        dia_anadido: new Date().toISOString().split('T')[0], 
        usuario: this.currentUser.nombre_usuario || 'anónimo', 
      };

      this.addnoticiasService.insertarNoticia(noticia).subscribe({
        next: (response) => {
          console.log('Noticia insertada:', response);
          this.dialogRef.close(noticia); // Cerrar el modal y devolver la noticia
          localStorage.clear();
          window.location.reload();          
        },
        error: (err) => {
          console.error('Error al insertar noticia:', err);
        }
      });
    }
  }

  currentUser: any;

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user; 
    });
  }

  onCancel(): void {
    this.dialogRef.close(); // Cerrar el modal sin guardar nada
  }
}
