import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit {
  registerData = {}
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  post(){
    this.authService.registerUser(this.registerData);
  }
}
