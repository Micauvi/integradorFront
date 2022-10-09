import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistradoCorrectoComponent } from './registrado-correcto/registrado-correcto.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'api/user', component: RegisterComponent},
  {path:'account', component: AccountComponent},
  {path:'registro', component:RegisterComponent},
  {path:'exitoso',component:RegistradoCorrectoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
