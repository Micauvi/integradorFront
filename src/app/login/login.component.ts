import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { userLogin } from '../users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private companiaServicio: CompanyService
  ) {}

  formularioUsuario: FormGroup = this.fb.group({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
  //inicio sesion

  InicioSesion(event: Event) {
    event.preventDefault();
    const usuario: userLogin = {
      USUARIO: this.formularioUsuario.value.usuario,
      CONTRASENA: this.formularioUsuario.value.contrasena,
    };
    this.companiaServicio.LogIn(usuario).subscribe(() => {
      console.log('Se ha iniciado secion');
    });
  }
  //probando git
  
}
