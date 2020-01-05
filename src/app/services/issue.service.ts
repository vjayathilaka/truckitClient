import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../model/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient:HttpClient) { }

  public createIssue(issue) {
    return this.httpClient.post<Issue>("http://localhost:9090/issues", issue);
  }

  // public getIssueById(id){
  //   return this.httpClient.get<Issue>("http://localhost:9090/issues"+'/'+id);
  // }

  public getAllIssues(){
    let issues = this.httpClient.get<Issue[]>('http://localhost:9090/issues');
    return issues;
  }
}

//  public getUserByUserRole(userRole){
//   return this.httpClient.get<User[]>("http://localhost:9090/users"+ '/' + userRole);
//  return users; let users =
// }
