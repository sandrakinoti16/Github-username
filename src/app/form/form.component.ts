import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../github-http/github-request.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
Username!:string
User!:User
GithubRequestService:GithubRequestService


  constructor(GithubRequestService:GithubRequestService) {this.GithubRequestService=GithubRequestService}
  submitUsername(){this.GithubRequestService.userRequest(this.Username)}
  ngOnInit(): void {
  }

}
