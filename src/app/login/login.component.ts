import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { user, userLogin } from '../users/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  private subscription: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private companiaServicio: CompanyService,
    private router: Router
  ) {}

  formularioUsuario: FormGroup = this.fb.group({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  InicioSesion() {
    const usuario: userLogin = {
      USUARIO: this.formularioUsuario.value.usuario,
      CONTRASENA: this.formularioUsuario.value.contrasena,
    };
    this.companiaServicio.LogIn(usuario).subscribe();
    this.router.navigate(['api/users']);
  }
}
