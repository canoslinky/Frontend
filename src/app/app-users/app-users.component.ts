import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css']
})
export class AppUsersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers();
  }

}
