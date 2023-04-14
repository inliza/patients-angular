import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private global: Globals, private router: Router) { }


  public login(user:LoginModel) {
    const url_api = `${this.global.urlApi}auth`;
    return this.http.post(url_api,user);
  }

  public isUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }


  public logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }
}
