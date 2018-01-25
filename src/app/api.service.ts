import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor( private http: Http) { }

  users = [];
  user = {};

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe(res => {
      this.users = res.json();
    });
  }

  getUser( id ) {
    return this.http.get('http://localhost:3000/profile/' + id );
  }
}
