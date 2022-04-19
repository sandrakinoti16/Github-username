import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { AlternativeServiceOptions } from 'http2';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User[] = [];
  alertService:AlertService ;
  user : User

  constructor(github: any-GithubRequestService, alertService ,private http : HttpClient) { 
    this.user = GithubRequestService.getUser()
    this.alertService =alertService ;
  }

  ngOnInit() {

    interface ApiResponse{
      login:string;
      id:string;
      avatar_url:string
    }

    this.http.get<ApiResponse>("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").subscribe((data: { login: any; id: any; avatar_url: any})=>{
      // Succesful API request
      this.user = new User(data.login, data.id,data.avatar_url)
    })
  }

}


function ngOnInit() {
  throw new Error('Function not implemented.');
}
