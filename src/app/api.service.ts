import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor( private http: HttpClient) { }

  users = [];
  user = {};
  posts = [];

  getUsers() {
    this.http.get<any>('http://localhost:3000/users').subscribe(res => {
      this.users = res;
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
    return this.http.get<any>('http://localhost:3000/posts/' + userId).subscribe( res => {
      this.posts = res;
    });
  }
}
