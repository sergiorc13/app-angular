import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput: HTMLInputElement = <HTMLInputElement>document.getElementById('password');
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }
  
  onLogin() {
    if (this.loginForm.invalid) {
      // Mostrar mensaje de error si el formulario es inválido
      this.errorMessage = 'Es obligatorio rellenar los campos para iniciar sesión.';
      return;
    }

    const { usernameOrEmail, password } = this.loginForm.value;

    this.authService.login(usernameOrEmail, password).subscribe(
      response => {
        if (response.success) {
         this.router.navigate(['/inicio']).then(() => {
            window.location.reload();
      });
        } else {
          this.errorMessage = response.message;     
        } 
      },
      error => {
        console.error('Error del servidor:', error);
        this.errorMessage = 'Error al iniciar sesión. Inténtalo de nuevo.'; 
      }
    );
  }
}
