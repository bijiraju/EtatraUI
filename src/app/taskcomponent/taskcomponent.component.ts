import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';
import { TasksService } from '../tasks.service';
import serverpath from"../../baseservice"
@Component({
  selector: 'app-taskcomponent',
  templateUrl: './taskcomponent.component.html',
  styleUrls: ['./taskcomponent.component.scss']
})
export class TaskcomponentComponent implements OnInit {
  tasks = [{
    projectid: "",
    module: "",
    task: "",
    allottedby: "",
    allottedtime: "",
    createddate: "",
    status: ""
  }]
  task = {
    projectid: "",
    module: "",
    task: "",
    allottedby: "",
    allottedtime: "",
    createddate: "",
    status: ""
  }
  projects:any
  constructor(public dialog: MatDialog, private http: HttpClient, private TasksService: TasksService) { }

  openNewTaskDialog() {
    let newTaskDialogRef = this.dialog.open(NewTaskDialogComponent,{data: this.projects});

    newTaskDialogRef.afterClosed().subscribe(result => {
      this.TasksService.insertTasks(result);
      console.log('Dialog result: ', result)
      this.http.get(`${serverpath}/tasks`).subscribe((data) => {
        this.tasks = JSON.parse(JSON.stringify(data));
      })
    });
  }

  editTaskDialog(task: any) {
    let editDialogRef = this.dialog.open(EditTaskDialogComponent,{data: {task:task,projects:this.projects}});
    console.log(task)
    editDialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ', result)
      let d1={...task,...result}
      console.log('Dialog result: ', d1)
      this.TasksService.editTasks(d1);
      this.http.get(`${serverpath}/tasks`).subscribe((data) => {
        this.tasks = JSON.parse(JSON.stringify(data));
      })
    });
  }

  panelOpenState = false;


  onDeleteTask(task:any) {
    //   if (index !== -1) {
    //       this.tasks.splice(index, 1);
    // }
    console.log(task._id);
    this.TasksService.deletetasks(task._id);
    this.http.get(`${serverpath}/tasks`).subscribe((data) => {
      this.tasks = JSON.parse(JSON.stringify(data));
    })
  }
  ngOnInit(): void {
    this.http.get(`${serverpath}/tasks`).subscribe((data) => {
      this.tasks = JSON.parse(JSON.stringify(data));
    })
    this.http.get(`${serverpath}/projects`).subscribe((data) => {
      this.projects = JSON.parse(JSON.stringify(data));
    })
  }

}
