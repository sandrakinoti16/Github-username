export class User {
    user: ApiResponse | undefined;
    constructor(public login:string, public id:number, public avatar_url:string){}
}