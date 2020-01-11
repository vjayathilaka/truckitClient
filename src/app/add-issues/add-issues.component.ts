import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/issue';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-add-issues',
  templateUrl: './add-issues.component.html',
  styleUrls: ['./add-issues.component.css']
})
export class AddIssuesComponent implements OnInit {

  issue : Issue = new Issue(null,'',null,null);

  constructor(private issueService:IssueService) { }

  ngOnInit() {
  }

  createIssue(){
    this.issueService.createIssue(this.issue)
    .subscribe(data => {alert("Issue created successfully.");
  });
  }

}
