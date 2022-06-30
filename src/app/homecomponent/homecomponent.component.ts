import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import serverpath from"../../baseservice"
@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.scss']
})
export class HomecomponentComponent implements OnInit {
  projects:any
  tasks:any
  asstask:any
  taskbyprjt:[]
  userid:any
  authData:any=""
  finaldata:any
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${serverpath}/tasks`).subscribe((data) => {
      this.tasks = JSON.parse(JSON.stringify(data));
    })
    this.http.get(`${serverpath}/projects`).subscribe((data) => {
      this.projects = JSON.parse(JSON.stringify(data));
    })
    this.http.get(`${serverpath}/getasstask`).subscribe((data) => {
      this.asstask = JSON.parse(JSON.stringify(data));
    })
  }
  gettasks(project:any)
  {
    console.log(project._id);
    // this.http.get(serverpath/tasksbypid/"+project._id).subscribe((data) => {
    //   this.tasks = JSON.parse(JSON.stringify(data));
    // })
    this.taskbyprjt = this.tasks.filter((task: { projectid: any; }) => task.projectid === project._id);
    console.log(this.taskbyprjt);
    console.log(localStorage.getItem("authData"));
    this.authData=localStorage.getItem("authData");
    this.userid=(JSON.parse(this.authData)).response._id;
    console.log(this.userid);
    this.asstask =this.asstask.filter((task: { userid: any; }) => task.userid === this.userid);
    console.log(this.asstask);
    this.finaldata = this.taskbyprjt.filter((ad:any) => 
      this.asstask.some((task: any)  => ad._id === task.taskid));
      console.log(this.finaldata);
    //this.taskbyprjt=[...result];
    //this.taskbyprjt = this.taskbyprjt.filter((task: { userid: any; }) => task.projectid === project._id);
   
    //this.taskbyprjt = this.tasks.filter(e) => (e._id === project._id);
  }

}
