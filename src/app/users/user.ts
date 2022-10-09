export interface user{
   
    NOMBRE:string
    APELLIDO:string
    USUARIO:string
    CONTRASENA:number
    PAIS:string
    CIUDAD:string
}
export interface userLogin{
    USUARIO:string
    CONTRASENA:number
}
export enum FirebaseCodeErrorEnum {
    EmailAlreadyInUse = 'auth/email-already-in-use',
    WeakPassword = 'auth/weak-password',
    InvalidEmail = 'auth/invalid-email',
    WrongPassword = 'auth/wrong-password',
    UserNotFound = 'auth/user-not-found',
}

// export codeError(code: string) {
//     switch (code) {
//       // El correo ya existe
//       case FirebaseCodeErrorEnum.EmailAlreadyInUse:
//         return 'El usuario ya existe';

//       // Contraseña debil
//       case FirebaseCodeErrorEnum.WeakPassword:
//         return 'La contraseña es muy debil';

//       // Correo invalido
//       case FirebaseCodeErrorEnum.InvalidEmail:
//         return 'Correo invalido';

//       // Contraseña incorrecta
//       case FirebaseCodeErrorEnum.WrongPassword:
//         return 'Contraseña incorrecta';

//       // El usuario no existe
//       case FirebaseCodeErrorEnum.UserNotFound:
//         return 'El usuario no existe'; 
//       default:
//         return 'Error desconocido';
//     }
//   }