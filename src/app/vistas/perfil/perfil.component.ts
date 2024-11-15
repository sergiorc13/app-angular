import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any;
  usernameOrEmail: string = localStorage.getItem('usernameOrEmail') || '';
  password: string = localStorage.getItem('password') || '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.obtenerPerfil();
  }

  obtenerPerfil(): void {
    this.authService.obtenerPerfil(this.usernameOrEmail, this.password).subscribe(
      data => {
        if (data.success) {
          this.usuario = data;
        } else {
          console.error('Error al obtener el perfil:', data.message);
        }
      },
      error => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
}
