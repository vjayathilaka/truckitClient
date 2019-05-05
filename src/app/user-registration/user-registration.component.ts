import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  topics = ['PM', 'Eng',' Client','Constructor'];

  user: User= new User('','','','','');

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.registerUser(this.user)
    .subscribe( data => {
      alert("Registrated successfully.");
    });
    
  }

 
}
