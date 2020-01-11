import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor(private route:ActivatedRoute, private projectService:ProjectService) { }

  projectId:string;
  project:Project = new Project('', '','', '','','','', '', '', '', '');

  projectImage:any;

  ngOnInit() {

    this.projectId = this.route.snapshot.params.id;

    this.projectService.getProjectById(this.projectId).subscribe(
      response => {
        this.project = response;
      }
    );

    this.projectImage = "http://localhost:9090/app/file/download/project/"+this.projectId;

    // this.projectService.getProjectImage(this.project.id).subscribe(
    //   responce =>{ this.projectImage=responce;
    //   }
    // );


  }
  viewProjectResource(id: string){
    // this.projectImage = "http://localhost:9090/app/file/download/project/"+this.project.id;
    // this.projectService.getProjectImage(this.project.id).subscribe(
    //     image =>{ this.projectImage=image;
    //     }
    // );


  }

}
