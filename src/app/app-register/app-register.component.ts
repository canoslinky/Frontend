import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit {
  registerData = {}
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  post(){
    this.apiService.sendUserRegistration(this.registerData);
  }
}
