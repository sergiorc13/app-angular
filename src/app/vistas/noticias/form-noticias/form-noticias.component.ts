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
  usuario: any;
  usernameOrEmail: string = localStorage.getItem('usernameOrEmail') || '';

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
        usuario: this.usuario?.nombre_usuario || 'anónimo', 
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

  currentUser: any;

  ngOnInit(): void {
    this.obtenerPerfil();
  }

  obtenerPerfil(): void {
    this.authService.obtenerPerfil(this.usernameOrEmail).subscribe(
      data => {
        if (data.success) {
          this.usuario = data;
        } else {
          console.error('Error al obtener el perfil:', data.message);
        }
      },
      error => {
       // console.error('Error en la solicitud POST:', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close(); // Cerrar el modal sin guardar nada
  }
}
