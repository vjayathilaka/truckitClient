import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '../model/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url:string = 'http://localhost:9090/projects';

  constructor(private httpClient:HttpClient) { }

  public getProjects() {
    let projects = this.httpClient.get<Project[]>('http://localhost:9090/projects');

    return projects;
  }

  public deleteProject(project) {
    return this.httpClient.delete<Project>("http://localhost:9090/projects" + "/"+ project.id);
  }

  public createProject(data) {
    return this.httpClient.post<Project>("http://localhost:9090/projects", data);
  }

  public editProject(data) {
    return this.httpClient.put<Project>("http://localhost:9090/projects", data);
  }

  public getProjectById(id){
    return this.httpClient.get<Project>(this.url+'/'+id);
  }

  public getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }

  // public getProjectImage(id){
  //   return this.httpClient.get<any>("http://localhost:9090/app/file/download/project/"+id);
  // }
}
