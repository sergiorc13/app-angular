import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private apiUrl = 'http://localhost/backend-proyecto/Controlador/modificarUser.php'; // Cambia la URL según tu ruta

  constructor(private http: HttpClient) {}

  modificarPerfil(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
}
