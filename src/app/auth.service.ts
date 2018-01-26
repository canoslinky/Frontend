import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  path = 'http://localhost:3000/auth';
  TOKEN_KEY = 'token';

  constructor( private http: HttpClient) { }
  Token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  registerUser(registerData) {
    this.http.post(this.path + '/register', registerData).subscribe( res => {
    });
  }
  loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData).subscribe( res => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
    });
  }
}
