import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class AuthService {
  path = 'http://localhost:3000/auth'
  constructor( private http: Http) { }

  registerUser(registerData) {
    this.http.post(this.path + '/register', registerData).subscribe( res => {
    });
  }
  loginUser(loginData) {
    this.http.post(this.path + '/login', loginData).subscribe( res => {
        localStorage.setItem('token', res.json().token);
    });
  }
}
