import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { user } from '../users/user';

@Injectable({
  providedIn: 'root'
})


export class CompanyService {
  API_URL = 'http://localhost:3000/api'
  
  constructor(private http: HttpClient) { }
  
  getUser(){
    return this.http.get(`${this.API_URL}/users`)
  }
  saveUser(user: user){
    return this.http.post(`${this.API_URL}/users`, user)
  }


}
