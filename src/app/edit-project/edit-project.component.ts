import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../services/project.service';
import {Project} from '../model/project';
import {User} from '../model/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private userService: UserService ) {}

  projectId: string;
  userList: User[];
  project: Project = new Project('', '', '', '', '', '', '', '', '', '', '');

  projectImage: any;

  public imagePath;
  imgURL: any;
  public message: string;
  public image;

  ngOnInit() {

    this.projectId = this.route.snapshot.params.id;
    this.projectService.getProjectById(this.projectId).subscribe(
      response => {
        this.project = response;
      }
    );

    this.userService.getUserById()
      .then(data =>
        this.userList = data as User[]
      );

    this.imgURL = 'http://localhost:9090/app/file/download/project/' + this.projectId;

    this.projectService.getImage(this.imgURL).subscribe(data => {
      console.log('file retriving');
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
  }

  createImageFromBlob(image: Blob) {
    if (image) {
      this.image = image;
    }
  }

  editProject() {
    const form_data = new FormData();

    form_data.append('image', this.image);

    // tslint:disable-next-line:forin
    for (const key in this.project) {
      form_data.append(key, this.project[key]);
    }

    this.projectService.editProject(form_data)
      .subscribe(data => {
        alert('Project edited successfully.');
      });
  }

  preview(files) {
    this.image = files[0];
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
}
