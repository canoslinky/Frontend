import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  constructor( private http: HttpClient) { }

  users = [];
  posts = [];
  path = environment.path;


  getUsers() {
    this.http.get<any>(this.path + '/users').subscribe(res => {
      this.users = res;
    });
  }

  getUser( id ) {
    return this.http.get(this.path + '/profile/' + id );
  }

  sendPost(registerPost) {
    return this.http.post(this.path + '/post', registerPost).subscribe( res => {
    }) ;
  }
  getPosts(userId) {
    return this.http.get<any>(this.path + '/posts/' + userId).subscribe( res => {
      this.posts = res;
    });
  }
}
