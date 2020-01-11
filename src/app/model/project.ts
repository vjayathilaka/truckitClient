// import { Task } from './task';

export class Project {
  constructor(
    public id: String,
    public projectName: string,
    public clientId: String,
    public deadline: String,
    public status: String,
    public engineerId: String,
    public constructorId: String,
    public engName: String,
    public conName: String,
    public manName: String,
    public cliName: String
  ) {

  }

}
