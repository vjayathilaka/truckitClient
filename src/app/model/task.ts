import { User } from './user';

export class Task{
    constructor(
      public id:String,
      public taskName:String,
      public assignee:string,
      public creator:User,
      public project:string,
      public comment:String
    ) {}
}

//    public taskId:String,
//    public taskName:String,
//    public taskAssignee:string,
//    public creator:User,
//    public assignedProject:string,
//    public taskComment:String
	