import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/backend-proyecto/Controlador/controlLogin.php';

  constructor(private http: HttpClient) {  }

  // Método para login
  login(usernameOrEmail: string, password: string): Observable<any> {
    const data = { action: 'login', usernameOrEmail, password };
    return this.http.post<any>(this.apiUrl, data).pipe(
      tap(response => {
        if (response.success) {
          localStorage.setItem('usernameOrEmail', usernameOrEmail);
        }
      })
    );
  }

  // Cerrar sesión
  logout(): void {
    this.http.get<any>(`${this.apiUrl}?action=logout`).subscribe(() => {
      localStorage.clear();
      window.location.reload();
    });
  }

  // Método para obtener los datos del perfil con un POST
  obtenerPerfil(usernameOrEmail: string): Observable<any> {
    const body = {
      action: 'check',
      usernameOrEmail: usernameOrEmail,
    };
    return this.http.post<any>(this.apiUrl, body);
  }
}
