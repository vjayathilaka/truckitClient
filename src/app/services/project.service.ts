import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  public getProjects() {
    let projects = this.httpClient.get<Project[]>('http://localhost:9090/projects');

    return projects;
  }

  public deleteProject(project) {
    return this.httpClient.delete<Project>("http://localhost:9090/projects" + "/"+ project.id);
  }

  public createProject(project) {
    return this.httpClient.post<Project>("http://localhost:9090/projects", project);
  }
}
