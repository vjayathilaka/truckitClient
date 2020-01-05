export class User{
    constructor(
      public id:string,
      public name:string,
      public email:string,
      public userRole:string,
      public password:string
    ) {}
}