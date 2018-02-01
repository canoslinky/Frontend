import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
  path = environment.path + '/auth';
  TOKEN_KEY = 'token';

  constructor( private http: HttpClient) { }
  Token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  registerUser(registerData) {
    this.http.post<any>(this.path + '/register', registerData).subscribe( res => {
      this.saveToke(res.token);
    });
  }
  loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData).subscribe( res => {
        this.saveToke(res.token);
    });
  }
  saveToke(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
