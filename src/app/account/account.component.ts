import { Component, OnInit } from '@angular/core';
import { userLogin, user,user2 } from '../users/user';
import { CompanyService } from '../services/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  opened=false
  public usuarios: user2[]=[]
  private usuariosSubscriber!: Subscription
 

  constructor(private companiaServicio: CompanyService, 
    private fb:FormBuilder) {}
  

   
  

  ngOnInit(): void {
    this.listarUsuarios()
  }
  listarUsuarios(){
    this.usuariosSubscriber = this.companiaServicio.cuentaUsuar()
    .subscribe((data) => {
      this.usuarios = data

      console.log(data)
    });
  }
   
  


}
