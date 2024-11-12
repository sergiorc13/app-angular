import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';
import { emailValidator } from 'src/app/validators/email';
import { passwordValidator } from 'src/app/validators/pswd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
export class LoginComponent {
  registroForm: FormGroup;
  errorMessage = ''; 

  constructor(
    private registroService: RegistroService,
    private fb: FormBuilder
  ) {
    this.registroForm = this.fb.group({
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
      tipo_usuario: ['normal']
    });

  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);  // Verifica si los datos son correctos
      this.registroService.registrarUsuario(this.registroForm.value).subscribe(
        (response) => {
          console.log('Respuesta del backend:', response);  // Verifica qué respuesta estás recibiendo
          if (response.success) {
            alert('Usuario registrado con éxito');
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
    const campo = this.registroForm.get('nombre_usuario');
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

}
