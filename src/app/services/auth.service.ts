import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/backend-proyecto/Controlador/controlLogin.php';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.checkSession(); // Comprobar si ya hay una sesión activa
  }

  // Método para login
  login(usernameOrEmail: string, password: string): Observable<any> {
    const data = { action: 'login', usernameOrEmail, password };
    return this.http.post<any>(this.apiUrl, data).pipe(
      // Si el login es exitoso, setear la sesión
      tap(response => {
        if (response.success) {
          this.setSession(response);
          localStorage.setItem('usernameOrEmail', usernameOrEmail);
        }
      })
    );
  }

  // Método para comprobar si la sesión está activa
  private checkSession(): void {
    this.http.get<any>(`${this.apiUrl}?action=checkSession`).subscribe(response => {
      if (response.isLoggedIn) {
        this.setSession(response);
      }
    });
  }

  // Guardar sesión
  setSession(user: any): void {
    this.currentUserSubject.next(user); // Actualizar el usuario actual
  }

  // Cerrar sesión
  logout(): void {
    this.http.get<any>(`${this.apiUrl}?action=logout`).subscribe(() => {
      localStorage.clear();
      this.currentUserSubject.next(null);
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
