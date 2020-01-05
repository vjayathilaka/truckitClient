import { Component, OnInit } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material'
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-issue-resources',
  templateUrl: './issue-resources.component.html',
  styleUrls: ['./issue-resources.component.css']
})
export class IssueResourcesComponent implements OnInit {
  
  imageToShow: any;
  imagepath: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpClient: HttpClient) {
    
   }

  ngOnInit() {
      this.imagepath = "http://localhost:9090/app/file/download/issue/"+this.data.dataKey;

  }
}
