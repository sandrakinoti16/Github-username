import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User} from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  [x: string]: string;
  user: User;
  

  constructor(private http:HttpClient) {
    this.user = new User("",0,"");
    this.http = http
   }
   userRequest(){
    interface ApiResponse{
       login:string;
       id:string;
      avatar_url:string
      
}
let  promise = new Promise((resolve, reject)=>{
  return this.http.get<ApiResponse>('https://api.github.com/users/' + this['username']).toPromise().then(response=>{
    this.user.user = response
    this.user.id = response
    this.user.avatar_url = response
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
