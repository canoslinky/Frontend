import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.css']
})
export class AppProfileComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  profile = {};
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.apiService.getUser(id).subscribe( data =>  this.profile =  data.json());
  }
}
