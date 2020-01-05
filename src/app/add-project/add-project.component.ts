import { Component, OnInit} from '@angular/core';

import { ProjectService } from '../services/project.service';
import { Project } from '../model/project';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project: Project = new Project('', '','', '','','','');

  userList: User[];
  public name:'User.name';
  public userRole:'User.userRole';
  
  currentDate = new Date();


  constructor(private route:ActivatedRoute,private projectService: ProjectService,private userService: UserService) {
    this.userRole;
    this.name;
   }

  ngOnInit() {
    

    // this.users = this.route.snapshot.params.id;
    this.userService.getUserById()
    .then(data => 
      this.userList= data as User[]
    );
    
    }
 
  


  createProject(): void {
    this.projectService.createProject(this.project)
        .subscribe( data => {
          alert("Project created successfully.");
        });

  };

  // getUserById(){
  //   this.userService.getUserById()
  //   .subscribe(data => 
  //     this.userList= data
  //   );

  // }

  


}
