import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  loginData = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }
  post() {
    this.authService.loginUser(this.loginData);
  }
}
