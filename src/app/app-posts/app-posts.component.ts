import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './app-posts.component.html',
  styleUrls: ['./app-posts.component.css']
})
export class AppPostsComponent implements OnInit {
  posts = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = this.route.snapshot.params.id;
    this.apiService.getPosts(userId);
  }

}
