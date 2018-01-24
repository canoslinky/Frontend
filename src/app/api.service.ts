import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor( private http: Http) { }

  users = [];

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe(res => {
      this.users = res.json();
    });
  }

  // sendUserRegistration(registerData) {
  //   this.http.post('http://localhost:3000/register', registerData).subscribe( res => {
  //   });
  // }
  // loginUser(loginData){
  //   this.http.post('http://localhost:3000/login', loginData).subscribe( res => {
  //   });
  // }
}
