import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../services/project.service';

import {Project } from '../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
      this.projectService.getProjects().subscribe(
        response => this.projects = response
      );
  }

  deleteProject(project: Project): void {
    this.projectService.deleteProject(project)
      .subscribe( data => {
        this.projects = this.projects.filter(u => u !== project);
      })
  };

}
