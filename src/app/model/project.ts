// import { Task } from './task';

export class Project{
    constructor(
      public id:String,
      public projectName:string,
      public clientId:String,
      public deadline:String,
      public startDate:String,
      public engineerId: String,
      public constructorId: String
    ) {}
}