import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User} from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  static getUser(): any {
    throw new Error('Method not implemented.');
  }
  
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
  this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{ 
    this.user.user = response
    this.user.login=response
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
