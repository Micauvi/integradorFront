import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'http://localhost:3000/login',component: LoginComponent},
  {path: 'http://localhost:/api/user', component: RegisterComponent},
  {path:'http://localhost:3000/api/users', component: AccountComponent},
  {path:'registro', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
