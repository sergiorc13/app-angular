import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { passwordValidator } from 'src/app/validators/pswd';
import { emailValidator } from 'src/app/validators/email';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {
  perfilForm!: FormGroup;

  constructor( private perfilService: PerfilService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibir los datos del usuario
    private dialogRef: MatDialogRef<ModificarPerfilComponent> // Inyectar MatDialogRef
  ) { }
  

  ngOnInit(): void {
    // Inicializar el formulario con los datos del usuario
    this.perfilForm = this.fb.group({
      nombre_usuario: [{ value: this.data?.nombre_usuario || '', disabled: true }],
      nombre: [this.data?.nombre || '', Validators.required],
      apellido: [this.data?.apellido || '', Validators.required],
      email: [this.data?.email || '', [Validators.required, Validators.email, emailValidator]],
      password: ['', [ Validators.required, passwordValidator]], 
      fecha_nacimiento: [this.data?.fecha_nacimiento || ''],
      direccion: [this.data?.direccion || '']
    });
  }

  onSubmit(): void {
    if (this.perfilForm.valid) {
      const updatedData = this.perfilForm.getRawValue();
      updatedData.id = this.data.id; // Asegúrate de incluir el ID del usuario

      console.log('Datos enviados:', updatedData); // Verifica los datos enviados

      this.perfilService.modificarPerfil(updatedData).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          if (response.success) {
            alert(response.message);
            this.dialogRef.close(); // Cerrar el modal si todo fue exitoso
            window.location.reload(); // Recargar la página para ver los cambios
          } else {
            alert('Error al actualizar los datos: ' + response.message);
          }
        },
        (error) => {
          console.error('Error al conectar con el backend', error);
          alert('Error al conectar con el servidor.');
        }
      );
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }


}
