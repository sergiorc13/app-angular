import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNoticiasService {

  //private apiUrl = 'http://localhost/backend-proyecto/Controlador/insertNoticias.php'; 
  private apiUrl = 'https://tfg-iesvillaverde.atwebpages.com/backend-proyecto/Controlador/insertNoticias.php';

  constructor(private http: HttpClient) {}

  insertarNoticia(noticia: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, noticia);
  }
}
