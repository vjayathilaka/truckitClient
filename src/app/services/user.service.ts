import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:9090/users/ui/';

  constructor(private httpClient:HttpClient) { }

  public registerUser(user){
    return this.httpClient.post<User>("http://localhost:9090/users/ui/", user);
  }

  public getAllUsers(){
    let users = this.httpClient.get<User[]>('http://localhost:9090/users');

    return users;
  }

  public deleteUser(user) {
    return this.httpClient.delete<User>("http://localhost:9090/users" + "/"+ user.id);
  }

}
