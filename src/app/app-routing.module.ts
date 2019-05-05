import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

import { ProjectComponent } from './project/project.component';
import { AddProjectComponent} from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddTaskComponent } from './add-task/add-task.component';



const routes: Routes = [
  { path: '', component: ProjectComponent, canActivate:[AuthGuardService]},
  { path: 'addProject', component: AddProjectComponent,  canActivate:[AuthGuardService]},
  { path: 'addtask', component: AddTaskComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: UserRegistrationComponent, canActivate:[AuthGuardService]},
  { path: 'userlist', component: UserListComponent, canActivate:[AuthGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  { path: 'viewPorject/:id', component: ViewProjectComponent, canActivate:[AuthGuardService]},
  { path: 'viewTask/:id', component: ViewTaskComponent, canActivate:[AuthGuardService]},
  { path: 'constructors', component: ConstructorsComponent, canActivate:[AuthGuardService]},
  { path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }