import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-app-post',
  templateUrl: './app-post.component.html',
  styleUrls: ['./app-post.component.css']
})
export class AppPostComponent implements OnInit {
  registerPost = { };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  post() {
    console.log(this.registerPost);
    this.apiService.sendPost(this.registerPost);
  }
}
