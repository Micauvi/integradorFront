import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { userLogin } from '../users/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private fb: FormBuilder,
    private companiaServicio: CompanyService,
    private router:Router
  ) {}

  formularioUsuario: FormGroup = this.fb.group({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
 
  InicioSesion(event: Event) {
    event.preventDefault();
    const usuario: userLogin ={
      USUARIO: this.formularioUsuario.value.usuario,
      CONTRASENA: this.formularioUsuario.value.contrasena,
    };
    this.companiaServicio.LogIn(usuario).subscribe()
      if (usuario.USUARIO){
        this.router.navigate(['/account'])
      }
    }
    
    
  }
  //probando git
  
// }
