import { Task } from './task';

export class Project{
    constructor(
      public id:String,
      public name:string,
      public tasks:Task[]
    ) {}
}