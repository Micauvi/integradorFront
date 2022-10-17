export interface user {
  NOMBRE: string;
  APELLIDO: string;
  USUARIO: string;
  CONTRASENA: string;
  PAIS: string;
  CIUDAD: string;
}
export interface userLogin {
  USUARIO: string;
  CONTRASENA: string;
}
export interface user2 {
  [x: string]: any;
  NOMBRE: string;
  APELLIDO: string;
  USUARIO: string;
  CONTRASENA: string;
  PAIS: string;
  CIUDAD: string;
}
