import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../services/issue.service';
import { Issue } from '../model/issue';
import { MatDialog } from '@angular/material/dialog';
import { IssueResourcesComponent } from '../issue-resources/issue-resources.component';
import { Project } from '../model/project';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {

  constructor(private route:ActivatedRoute, private issueService: IssueService, private dialog: MatDialog) { }

  issues : Issue[];
  issueId:string;
  issue : Issue = new Issue(null,'',null,null);

  ngOnInit() {
    
    this.issueId = this.route.snapshot.params.id;

    // this.issueService.getIssueById(this.issueId)
    // .subscribe( response => {
    //     this.issue = response;
    //   }
    // );
    this.issueService.getAllIssues()
    .subscribe(isresponse => 
      this.issues= isresponse
    );

  }


    viewIssueResource(id: string){
      this.dialog.open(IssueResourcesComponent,  {
        width: '700px',
        height: '600px',
        data: {
          dataKey: id
        }});
    
    };

}
