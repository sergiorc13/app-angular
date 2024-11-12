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

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { usernameOrEmail, password } = this.loginForm.value;
    this.authService.login(usernameOrEmail, password).subscribe(
      response => {
        if (response.success) {
          this.authService.setSession(response); // Guarda el nombre de usuario en la sesión
          this.router.navigate(['/inicio']); // Redirige a la página de inicio
        } else {
          this.errorMessage = response.message; // Muestra el error
        }
      },
      error => {
        this.errorMessage = 'Hubo un error al intentar iniciar sesión.';
      }
    );
  }
}
