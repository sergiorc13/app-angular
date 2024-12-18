import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      
  constructor(public _servicio: InfoPaginaService, private router: Router, private authService: AuthService) { }

  usuario: any;
  usernameOrEmail: string = localStorage.getItem('usernameOrEmail') || '';

  ngOnInit(): void {
    this.obtenerPerfil();
  }

  onLogout() {
    this.authService.logout();
    console.log(this.usernameOrEmail);
    this.router.navigate(['/login']);
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

  
  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }
}
