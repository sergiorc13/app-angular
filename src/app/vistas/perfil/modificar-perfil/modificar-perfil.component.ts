import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { passwordValidator } from 'src/app/validators/pswd';
import { emailValidator } from 'src/app/validators/email';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {
  perfilForm!: FormGroup;

  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput: HTMLInputElement = <HTMLInputElement>document.getElementById('password');
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any // Recibir los datos del usuario
  ) {}

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
      const updatedData = this.perfilForm.getRawValue(); // Obtener los valores del formulario
      console.log('Datos actualizados:', updatedData);
      // Aquí puedes manejar el envío de los datos actualizados al backend
    }
  }
}
