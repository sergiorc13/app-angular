import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiUrl = 'http://localhost/backend-proyecto/Controlador/controlLogin.php';

  constructor(private http: HttpClient) { }

  // Método para obtener los datos del perfil con un POST
  obtenerPerfil(usernameOrEmail: string, password: string): Observable<any> {
    const body = {
      action: 'check',
      usernameOrEmail: usernameOrEmail,
      password: password
    };
    return this.http.post<any>(this.apiUrl, body);
  }
}
