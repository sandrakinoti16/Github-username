import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User} from '../user-class/user';
import { Repo } from '../repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  // getUsers: any;
  newuser:any=[]
  repositorydata:any=[]
  updateName: any;
  static getUser(): any {
    throw new Error('Method not implemented.');
  }
  
  user: User;
  repo! : Repo
  

  constructor(private http:HttpClient) {
    this.user = new User("",0,"");
    this.http = http
    this.repo = new Repo ("","","")
   }
   userRequest(Username:string){
    interface ApiResponse{
       login:string;
       id:number;
      avatar_url:string
      
}
let  promise = new Promise<void>((resolve, reject)=>{
  this.http.get<ApiResponse>("https://api.github.com/users/"+Username).toPromise().then((response:any)=>{ 
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
  this.http.get<any>("https://api.github.com/users/"+Username+"/repos").toPromise().then((response)=>{ 
for(let i=0;i<response.length;i++){
this.newuser=new Repo(response[i].name,response[i].language ,response[i].clone_url)
this.repositorydata.push(this.newuser)
}resolve()
  },error=>{reject(error)})
})
return promise
}
}
