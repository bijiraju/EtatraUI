import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../projectcomponent/project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprojectcomponent',
  templateUrl: './addprojectcomponent.component.html',
  styleUrls: ['./addprojectcomponent.component.scss']
})
export class AddprojectcomponentComponent implements OnInit {

  constructor(private projectService: ProjectService,private router: Router){  } 
  projectItem= {
    projectname:'',
    clientname:'',
    email:'',
    country:'',
    state:'',
    zipcode:'',
    phone:'',
    startdate:'',
    enddate:'',
    duration:''}
  title:string="ADD PROJECT";
  ngOnInit(): void {
  }
  AddProject()
  {    
    this.projectService.newProject(this.projectItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/projects']);
  }
 
}




  
