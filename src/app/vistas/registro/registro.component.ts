import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { emailValidator } from 'src/app/validators/email';
import { passwordValidator } from 'src/app/validators/pswd';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput: HTMLInputElement = <HTMLInputElement>document.getElementById('password');
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }
  
  form: FormGroup;
  errorMessage = ''; 

  constructor(
    private registroService: RegistroService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre_usuario: [
        '',
        [
          Validators.required, 
          Validators.minLength(5),
        ]
      ],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email, 
          emailValidator
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          passwordValidator 
        ]
      ],
      direccion: ['', Validators.required], // Campo obligatorio para la dirección
      fecha_nacimiento: ['', Validators.required], // Campo obligatorio para la fecha de nacimiento
      tipo_usuario: ['normal']
    });

  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario válido:', this.form.value);  // Verifica si los datos son correctos
      this.registroService.registrarUsuario(this.form.value).subscribe(
        (response) => {
          console.log('Respuesta del backend:', response);  // Verifica qué respuesta estás recibiendo
          if (response.success) {
            alert('Usuario registrado con éxito');
            this.router.navigate(['/login']);
          } else {
            this.errorMessage = response.message;  // Muestra el mensaje de error del backend
          }
        },
        (error) => {
          console.error('Error en la solicitud:', error);  // Verifica si hay un error de conexión
          alert('Error en la conexión');
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  obtenerErrorCampoNombreUsuario() {
    const campo = this.form.get('nombre_usuario');
    if (campo?.hasError('required')) {
      return 'El nombre de usuario es requerido';
    }
    if (campo?.hasError('minlength')) {
      return 'El nombre de usuario debe tener al menos 5 caracteres';
    }
    if (campo?.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  obtenerErrorCampoFechaNacimiento() {
    const campo = this.form.get('fecha_nacimiento');
    if (campo?.hasError('required')) {
      return 'La fecha de nacimiento es requerida';
    }
    return '';
  }

}
