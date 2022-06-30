import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { ProjectModel } from '../projectcomponent/project.model';



@Component({
  selector: 'app-updateprojectcomponent',
  templateUrl: './updateprojectcomponent.component.html',
  styleUrls: ['./updateprojectcomponent.component.scss']
})
export class UpdateprojectcomponentComponent implements OnInit {
  projectItem={
    projectname:'',
    clientname:'',
    email:'',
    country:'',
    state:'',
    zipcode:'',
    phone:'',
    startdate:'',
    enddate:'',
    duration:''
  }
 
    constructor(private router:Router,private projectService:ProjectService) { }

    ngOnInit(): void {
      let project_id = localStorage.getItem("editProjectId");
      this.projectService.getProject().subscribe((data)=>{
        this.projectItem=JSON.parse(JSON.stringify(data));
    })
    }
    editProject()
    {    
      this.projectService.editProject(this.projectItem);   
      alert("Success");
      this.router.navigate(['projects']);
    }
  
  }


  
  
