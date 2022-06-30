import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss']
})
export class NewTaskDialogComponent implements OnInit {
  tasks = {
    projectid: "",
    module: "",
    task: "",
    allottedby: "",
    allottedtime: "",
    createddate:Date.now(),
    status: ""
  }
  projects=[
    {"_id":"","projectname":"","clientname":"","email":"","country":"","state":"","Zipcode":"","phone":"1234567891","startdate":"1-1-2020","enddate":"2-3-2021","duration":"1year"}
  ]
  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private _router: Router, private http: HttpClient, private TasksService: TasksService) {
    console.log(this.data);
    this.projects=this.data;
   }
  insertTask() {

    console.log(this.tasks);
    
    this.TasksService.insertTasks(this.tasks);


    alert("Successfully inserted 😊");
    this._router.navigate(['tasks']);
  }
  ngOnInit(): void {
  }

}
