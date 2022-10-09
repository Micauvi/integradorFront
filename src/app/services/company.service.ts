import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { user,userLogin } from '../users/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

  
export class CompanyService {
  API_URL = 'http://localhost:3000/'
  
  
  constructor(private http: HttpClient) { }
  
  guardarGente(user:user):Observable<void>{
    return this.http.post<void>(this.API_URL + 'api/user', user);
  }

  LogIn(usuario:userLogin):Observable<void>{
    return this.http.post<void>(this.API_URL + 'login', usuario); 
  }
  Cuenta(usuario:userLogin):Observable<void>{
    return this.http.get<void>(this.API_URL + 'account'); 
  }
  registradoOk():Observable<void>{
    return this.http.get<void>(this.API_URL+ 'exitoso');
  }
  


}
