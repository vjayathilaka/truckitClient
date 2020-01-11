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

  public imagePath;
  imgURL: any;
  public message: string;
  public image;


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

    var form_data = new FormData();

    form_data.append("image", this.image);

    for ( var key in this.project ) {
      form_data.append(key, this.project[key]);
    }

    this.projectService.createProject(form_data)
        .subscribe( data => {
          alert("Project created successfully.");
    });

  };

  preview(files) {
    this.image = files[0];
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  


}
