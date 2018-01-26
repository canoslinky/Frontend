import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor( private http: Http) { }

  users = [];
  user = {};
  posts = [];

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe(res => {
      this.users = res.json();
    });
  }

  getUser( id ) {
    return this.http.get('http://localhost:3000/profile/' + id );
  }

  sendPost(registerPost) {
    return this.http.post('http://localhost:3000/post', registerPost).subscribe( res => {
    }) ;
  }
  getPosts(userId) {
    return this.http.get('http://localhost:3000/posts/' + userId).subscribe( res => {
      this.posts = res.json();
    });
  }
}
