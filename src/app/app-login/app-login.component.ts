import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  loginData = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  post() {
    this.authService.loginUser(this.loginData);
  }
}
