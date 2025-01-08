import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  //private apiUrl = 'http://localhost/backend-proyecto/Controlador/controlNoticias.php?action=getNoticias';
 // private apiUrl = 'https://tfg-iesvillaverde.atwebpages.com/backend-proyecto/Controlador/controlNoticias.php?action=getNoticias';
    private apiUrl = 'http://caserio.infinityfreeapp.com/backend-proyecto/Controlador/controlNoticias.php?action=getNoticias';

  constructor(private http: HttpClient) {}

  obtenerNoticias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
