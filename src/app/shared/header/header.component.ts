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

  currentUser: any;

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user; 
    });
  }

  onLogout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }

  
  buscarProducto(termino: string) {

    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }
}
