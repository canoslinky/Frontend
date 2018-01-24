import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor( private http: Http) { }

  registerUser(registerData) {
    this.http.post('http://localhost:3000/register', registerData).subscribe( res => {
    });
  }
  loginUser(loginData){
    this.http.post('http://localhost:3000/login', loginData).subscribe( res => {
        localStorage.setItem('token', res.json().token)
    });
  }
}
