import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user, user2, userLogin } from '../users/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  guardarGente(user: user): Observable<void> {
    return this.http.post<void>(this.API_URL + 'api/user', user);
  }

  LogIn(usuario: userLogin): Observable<void> {
    return this.http.post<void>(this.API_URL + 'login', usuario);
  }
  cuentaUsuar(): Observable<user2[]> {
    return this.http.get<user2[]>(this.API_URL + 'api/users');
  }
}
