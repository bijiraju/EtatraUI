import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import serverpath from"../../baseservice"
// import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
// import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.scss']
})
export class UsercomponentComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router, private UsersService: UsersService) { }

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

  // panelOpenState = false;
  // tasks = [
  //   { title: "superadmin", summary: "superadmin@gmail.com", description: "1989 is the fifth studio album" },
  //   { title: "admin", summary: "admin@gmail.com", description: "by American singer-songwriter Taylor Swift" },
  //   { title: "user", summary: "user@gmail.com", description: "It was released on October 27, 2014" },
  //   { title: "user1", summary: "user1@gmail.com", description: "The album's synth-pop sound is characterized by heavy synthesizers," }
  // ]

  // onDeleteTask(index: number) {
  //   if (index !== -1) {
  //     this.tasks.splice(index, 1);
  //   }
  // }

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




  ngOnInit(): void {
    this.http.get(`${serverpath}/user`).subscribe((data) => {
      this.users = JSON.parse(JSON.stringify(data));
    })
  }

  onEdit(user: any) {
    localStorage.setItem("editUserId", user._id.toString());
    this.router.navigate(['update-user']);

  }

  onDelete(user: any) {
    this.UsersService.deleteUser(user._id)
      .subscribe((data) => {
        this.users = this.users.filter(p => p !== user);
      })


  }

}
