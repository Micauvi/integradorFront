import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

// import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './services/company.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [CompanyService,], 
  bootstrap: [AppComponent],
 
})
export class AppModule { }
