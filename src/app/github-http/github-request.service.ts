import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User} from '../user-class/user';
import { Repo } from '../repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  getUsers: any;
  updateName: any;
  static getUser(): any {
    throw new Error('Method not implemented.');
  }
  
  user: User;
  repo! : Repo
  

  constructor(private http:HttpClient) {
    this.user = new User("",0,"");
    this.http = http
    this.repo = new Repo ("",0,"")
   }
   userRequest(){
    interface ApiResponse{
       login:string;
       id:number;
      avatar_url:string
      
}
let  promise = new Promise((resolve, reject)=>{
  this.http.get<ApiResponse>(environment.apikey).toPromise().then((response:any)=>{ 
    this.user.id = response.id
    this.user.login=response.login
    this.user.avatar_url = response.avatar_url
    console.log(response)

    resolve(response)
  },
  error=>{
    // this.user.name = "Cannot find name"
    // this.user.login = "Cannot find login information" 
    // this.user.repos = 0


    reject(error)

  })
})
return promise
}
}
