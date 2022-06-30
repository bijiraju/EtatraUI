import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { HttpClient } from '@angular/common/http';
import serverpath from"../../baseservice"


@Component({
  selector: 'app-projectcomponent',
  templateUrl: './projectcomponent.component.html',
  styleUrls: ['./projectcomponent.component.scss']
})
export class ProjectcomponentComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService, private http: HttpClient) { }
  title: string = "PROJECT LIST";
  projects = [{
    projectname: '',
    clientname: '',
    email: '',
    country: '',
    state: '',
    zipcode: '',
    phone: '',
    startdate: '',
    enddate: '',
    duration: ''
  }];

  ngOnInit(): void {
    this.http.get(`${serverpath}/projects`).subscribe((data) => {
      this.projects = JSON.parse(JSON.stringify(data));
    });
  }
    btnClick() {
      this.router.navigateByUrl('/addproject');
  };

  editProject(project: any) {
    localStorage.setItem("editProductId", project._id.toString());
    this.router.navigate(['update']);

  }
  deleteProject(project: any) {
    this.projectService.deleteProject(project._id)
      .subscribe((data) => {
        this.projects = this.projects.filter(p => p !== project);
      })
  

  }
}