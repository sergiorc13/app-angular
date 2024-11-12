import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/backend-proyecto/Controlador/controller.php';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Método para login
  login(usernameOrEmail: string, password: string): Observable<any> {
    const data = { action: 'login', usernameOrEmail, password };
    return this.http.post<any>(this.apiUrl, data);
  }

  // Guardar sesión
  setSession(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user)); // Puedes cambiarlo a sessionStorage si prefieres que dure solo la sesión
    this.currentUserSubject.next(user);
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
