
import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { user } from '../users/user';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formularioUsuario: FormGroup
  contrasenasIguales!: boolean

  constructor(private fb: FormBuilder) {
    this.formularioUsuario = fb.group({

      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[]),
      usuario: new FormControl('',[]),
      contrasena: new FormControl('',[Validators.minLength(5)]),
      contrasena2: new FormControl('',[Validators.minLength(5)]),
      pais: new FormControl('',[]),
      ciudad: new FormControl('',[]),
    })
   }

  ngOnInit(): void {
  }
  contrIguales(){
    const contrasena1 =this.formularioUsuario.value.contrasena
    const contrasena2 =this.formularioUsuario.value.contrasena2

    this.contrasenasIguales = contrasena1 === contrasena2
    console.log(this.formularioUsuario)
  }

}
