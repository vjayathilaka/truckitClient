import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  task: Task = new Task('','','',[]);

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.taskService.createTask(this.task)
    .subscribe( data => {
      alert("Task successfully Added.");
    });
  }

}
