import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { ProjectService } from '../services/project.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  task: Task = new Task('','','',null,'','');

  projectList: Project[];
  constructorList: User[];

  public porjectName:'project.ProjectName'

  public name:'User.name';
  public userRole:'User.userRole';

  constructor(private taskService: TaskService, private userService: UserService, private projectService: ProjectService) { 
    this.userRole;
    this.name;
    this.porjectName;
  }

  ngOnInit() {
    
    this.userService.getUserById()
    .then(data => 
      this.constructorList= data as User[]
    );

    this.projectService.getProjects()
    .subscribe(data => 
      this.projectList= data);
      //  as Project[]);
     
  }

  saveTask(){

    // alert(JSON.stringify(this.task));
    this.taskService.saveTask(this.task)
    .subscribe( data => {
      alert("Task successfully Added.");
    });
  }

}
