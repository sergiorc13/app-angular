// services/registro.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost/backend-proyecto/Controlador/controlRegistro.ini.php';

  constructor(private http: HttpClient) { }

  registrarUsuario(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  comprobarUsuarioExistente(usuario: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}?usuario=${usuario}`);
  }
}
