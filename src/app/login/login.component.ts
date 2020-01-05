import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'pmanager01';
  password = '1234pm';
  public invalidLogin =false;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {

    this.loginservice.authenticate(this.username, this.password).subscribe(user =>{
      if(user.name != null){
        sessionStorage.setItem('username', this.username);
        this.router.navigate(['']);
        this.invalidLogin = false;
      } else {
        this.invalidLogin = true;
      }
      
    });
  }

  getInvalidLogin() {
    return this.invalidLogin;
  }

  setInvalidLogin(invalidLogin){
    this.invalidLogin = invalidLogin;
  }

}
