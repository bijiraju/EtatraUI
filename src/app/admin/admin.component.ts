import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import serverpath from"../../baseservice"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router, private AdminsService: UsersService) { }

  admins = [{
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

    this.http.get(`${serverpath}/admins`).subscribe((data) => {
      this.admins = JSON.parse(JSON.stringify(data));
    });

  }

  onEdit(admin: any) {
    localStorage.setItem("editAdminId", admin._id.toString());
    this.router.navigate(['update-admin']);

  }

  onDelete(admin: any) {
    this.AdminsService.deleteUser(admin._id)
      .subscribe((data) => {
        this.admins = this.admins.filter(p => p !== admin);
      })


  }

}
