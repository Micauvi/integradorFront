import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { user,userLogin } from '../users/user';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide2 = true;
  loading :boolean =false

  formularioUsuario: FormGroup;
  contrasenasIguales!: boolean;

  constructor(
    private fb: FormBuilder,
    private CompaniaServicio: CompanyService,
    private toastr:ToastrService,
    private router: Router

  ) {
    
    //validadores
    this.formularioUsuario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.minLength(5), Validators.required]),
      contrasena2: new FormControl('', [Validators.minLength(5),Validators.required]),
      pais: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
    });
  }
  

  ngOnInit(): void {}

  agrUsuario(event: Event) {
    event.preventDefault();
    const usuario: user = {
      NOMBRE: this.formularioUsuario.value.nombre,
      APELLIDO: this.formularioUsuario.value.apellido,
      USUARIO: this.formularioUsuario.value.usuario,
      CONTRASENA: this.formularioUsuario.value.contrasena,
      PAIS: this.formularioUsuario.value.pais,
      CIUDAD: this.formularioUsuario.value.ciudad,
       
      }
      this.CompaniaServicio.registradoOk()
      if (usuario.USUARIO){
        this.router.navigate(['/exitoso'])
    };
    
  }

  contrIguales() {
    const contrasena1 = this.formularioUsuario.value.contrasena;
    const contrasena2 = this.formularioUsuario.value.contrasena2;
    
    console.log(this.formularioUsuario);
    if (contrasena1 !== contrasena2) {
      this.toastr.error(
        'Las contraseñas ingresadas deben ser las mismas',
        'Error'
      );
      return;
    }
  }
  // InicioSesion(event: Event) {
  //   event.preventDefault();
  //   const usuario: userLogin ={
  //     USUARIO: this.formularioUsuario.value.usuario,
  //     CONTRASENA: this.formularioUsuario.value.contrasena,
  //   };
   
  //   }


  // InicioSesion(event: Event) {
  //   event.preventDefault();
  //   const usuario: userLogin = {
  //     USUARIO: this.formularioUsuario.value.usuario,
  //     CONTRASENA: this.formularioUsuario.value.contrasena,
  //   };
  //   this.companiaServicio.LogIn(usuario).subscribe(() => {
  //     console.log('Se ha iniciado secion');
  //   });
  // }
  
  

}
