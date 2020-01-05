import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {

    return this.isValidUser(username, password);

  }

  public isValidUser(userName, password) {
    let user = new User("",userName, "", "", password);
    let isValidUser =  this.httpClient.post<User>("http://localhost:9090/loginAng", user);
    return isValidUser;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
