import { Project } from './project';


export class Issue {
    constructor(
        public id:number,
        public name:String,
        public comment:String,
        public project:Project,

    ){}
}
