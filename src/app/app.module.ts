import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//pop-up window for issue resources.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';

import { ViewProjectComponent } from './view-project/view-project.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddIssuesComponent } from './add-issues/add-issues.component';
import { ViewIssueComponent } from './view-issue/view-issue.component';
import { IssueResourcesComponent } from './issue-resources/issue-resources.component';
// import { BsDatePickerModule } from 'ngx-bootstrap/Datepicker';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    AddProjectComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    ViewProjectComponent,
    ViewTaskComponent,
    UserProfileComponent,
    UserRegistrationComponent,
    UserListComponent,
    AddTaskComponent,
    AddIssuesComponent,
    ViewIssueComponent,
    IssueResourcesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents:[IssueResourcesComponent],
  
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
