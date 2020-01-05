import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url:string = 'http://localhost:9090/tasks';

  constructor(private httpClient:HttpClient) { }

  public getTaskById(id){
    return this.httpClient.get<Task>(this.url+'/'+id);
  }

  public saveTask(task) {
    return this.httpClient.post<Task>('http://localhost:9090//tasks/ui/',task);
  }

  

}
