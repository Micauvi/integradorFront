import { Component, OnInit } from '@angular/core';
import { userLogin } from '../users/user';
import { CompanyService } from '../services/company.service'; 
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // constructor(private companiaServicio: CompanyService, private fb: FormBuilder) { }
  // formularioUsuario: FormGroup = this.fb.group()

  ngOnInit(): void {
  }
  // cuenta(event: Event) {
  //   event.preventDefault();
  //   const usuario: userLogin = {
  //     USUARIO: this.formularioUsuario.value.usuario,
  //     CONTRASENA: this.formularioUsuario.value.contrasena,
  //   };
  //   this.companiaServicio.registradoOk(usuario).subscribe()
  // }

}
