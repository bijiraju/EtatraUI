import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  useredit = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    dob: "",
    password: "",
    roleId: ""
  }
  constructor(private fb: FormBuilder, private _router: Router, private http: HttpClient, private UsersService: UsersService) { }

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

  // MustMatch(password: any, confirmPassword: any) {

  //   return (formGroup: FormGroup) => {

  //     const passwordcontrol = formGroup.controls[password];
  //     const confirmpasswordcontrol = formGroup.controls[confirmPassword];

  //     if (confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['MustMatch']) {
  //       return;
  //     }

  //     if (passwordcontrol.value != confirmpasswordcontrol.value) {
  //       confirmpasswordcontrol.setErrors({ MustMatch: true });
  //     } else {
  //       confirmpasswordcontrol.setErrors(null);
  //     }


  //   };

  // }

  

  editUser() {
    if (this.signupForm.invalid) {
      return;
    }

    else {
      this.UsersService.editUser(this.useredit);
    }

    alert("Successfully Editted 😊");
    this._router.navigate(['users']);
  }

  ngOnInit(): void {
    let userId = localStorage.getItem("editUserId");
    this.UsersService.getUser(userId).subscribe((data) => {
      this.useredit = JSON.parse(JSON.stringify(data));
    })
  }

}
