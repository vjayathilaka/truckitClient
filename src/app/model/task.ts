export class Task{
    constructor(
      public id:String,
      public name:string,
      public creator:string,
      public comments: string[]
    ) {}
}