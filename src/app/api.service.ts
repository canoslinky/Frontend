import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor( private http: Http) { }

  sendUserRegistration(registerData) {
    this.http.post('http://localhost:3000/register', registerData).subscribe( res => {
    });
  }

}
