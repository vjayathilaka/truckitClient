import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      response => this.users = response
    );

  }

  deleteuser(users:User): void {
    this.userService.deleteUser(users)
    .subscribe(data => {
      this.users =this.users.filter(u=> u!==users);
    })

  };

 

}
