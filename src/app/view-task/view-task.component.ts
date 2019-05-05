import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private route:ActivatedRoute, private taskService:TaskService) { }

  taskId:string;
  task:Task = new Task('', '', '', null);

  ngOnInit() {

    this.taskId = this.route.snapshot.params.id;

    this.taskService.getTaskById(this.taskId).subscribe(
      response => {
        this.task = response;
      }
    ); 
  }

}
