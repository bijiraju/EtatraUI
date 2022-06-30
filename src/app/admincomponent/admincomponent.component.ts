import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import serverpath from 'src/baseservice';
// import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
// import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';

@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.scss']
})
export class AdmincomponentComponent implements OnInit {
  adminusers: any = [];
  constructor(public dialog: MatDialog, private http: HttpClient,private router: Router, private UsersService: UsersService) {


  }

  // openNewTaskDialog() {
  //   let newTaskDialogRef = this.dialog.open(NewTaskDialogComponent);

  //   newTaskDialogRef.afterClosed().subscribe( result => {
  //     console.log('Dialog result: ', result)
  //   });
  // }

  // editTaskDialog() {
  //   let editDialogRef = this.dialog.open(EditTaskDialogComponent);

  //   editDialogRef.afterClosed().subscribe( result => {
  //     console.log('Dialog result: ', result)
  //   });
  // }

  panelOpenState = false;

  users = [{
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: '',
    dob: '',
    password: '',
    roleId: '',
    username: ''
  }];
  onDelete(user: any) {
    this.UsersService.deleteUser(user._id)
      .subscribe((data) => {
        this.users = this.users.filter(p => p !== user);
      })
  }
  onEdit(user: any) {
    localStorage.setItem("editUserId", user._id.toString());
    this.router.navigate(['update-user']);

  }
  ngOnInit(): void {
    this.http.get(`${serverpath}/admin`).subscribe((response) => {
      //console.log(JSON.stringify(response));
      //console.log(response);
      // this.adminusers=[...JSON.parse(JSON.stringify(response)).response]
      // console.log(Array.isArray(this.adminusers));
      console.log(response);
      this.adminusers = JSON.parse(JSON.stringify(response));
    })
  }

}
