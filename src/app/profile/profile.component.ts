import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-services/profile.service';
import { User } from '../user-class/user';
import { GithubRequestService } from '../github-http/github-request.service';
/*import { profile } from 'console';*/

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: User;
  repos: any;
  user: string;
  githubhttp: any
  hideInput: boolean = false;
  profileService: any;
  repositorydetails:any =[]

  constructor( private GithubRequestService: GithubRequestService) {
    this.user = "sandrakinoti16";
  }
  

  // findProfile() {
  //   this.GithubRequestService.updateName(this.user);
  //   // this.GithubRequestService.getUsers()
  //   this.profile = this.GithubRequestService.user;
  //   console.log(this.profile.login + "now")


    // this.profileService.getRepos().then((repos: any)=>{
    //   this.repos = repos
    // })
  // }

  ngOnInit() {
    // this.GithubRequestService.getUsers()
    this.profile= this.GithubRequestService.user;
    console.log(this.profile + "now")
    this.repositorydetails= this.GithubRequestService.repositorydata


    // this.profileService.getRepos().then((repos: any)=>{
    //   this.repos = repos
    // })

  }
}
