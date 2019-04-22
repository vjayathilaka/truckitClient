import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../services/project.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project: Project = new Project('', '', null);

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  createProject(): void {
    this.projectService.createProject(this.project)
        .subscribe( data => {
          alert("Project created successfully.");
        });

  };

}
