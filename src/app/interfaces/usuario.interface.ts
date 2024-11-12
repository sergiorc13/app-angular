export interface Usuario {
  id?: number;
  nombre_usuario: string;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  fecha_registro?: string;
  tipo_usuario: 'administrador' | 'normal';
}
