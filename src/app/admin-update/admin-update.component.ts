import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {

  adminedit = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    dob: "",
    password: "",
    roleId: ""
  }

  constructor(private fb: FormBuilder, private _router: Router, private http: HttpClient, private AdminsService: UsersService) { }

  signupForm = this.fb.group({

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    mobilenumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([0-9]{10})$')])),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)([\.])([a-z]{2,3})(\.[a-z]{2,3})?$')])),
    roleId: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([1-3]{1})$')]))

  }
    // , {
    //   validators: this.MustMatch('password', 'confirmPassword')
    // }
  );

  get f() {
    return this.signupForm.controls;
  }


  ngOnInit(): void {

    let userId = localStorage.getItem("editAdminId");
    this.AdminsService.getUser(userId).subscribe((data) => {
      this.adminedit = JSON.parse(JSON.stringify(data));
    })
  }

  editUser() {
    if (this.signupForm.invalid) {
      return;
    }

    else {
      this.AdminsService.editUser(this.adminedit);
    }

    alert("Successfully Editted 😊");
    this._router.navigate(['admins']);
  }

}
