import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import serverpath from 'src/baseservice';


@Component({
  selector: 'app-signupcomponent',
  templateUrl: './signupcomponent.component.html',
  styleUrls: ['./signupcomponent.component.scss']
})
export class SignupcomponentComponent implements OnInit {
  username = "";
  firstname = "";
  lastname = "";
  email = "";
  mobilenumber = "";
  dob = "";
  password = "";
  roleId = 3;
  // signupForm!:FormGroup;

  constructor(private fb: FormBuilder, private _router: Router, private http: HttpClient) { }

  signupForm = this.fb.group({

    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    mobilenumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([0-9]{10})$')])),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)([\.])([a-z]{2,3})(\.[a-z]{2,3})?$')])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    confirmPassword: new FormControl('', Validators.compose([Validators.required]))
    // email: ['', [Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)([\.])([a-z]{2,3})(\.[a-z]{2,3})?$'), Validators.required]],
    // password: ['', [Validators.minLength(8), Validators.required]],
    // confirmPassword: ['', Validators.required]
  }, {
    validators: this.MustMatch('password', 'confirmPassword')
  });

  get f() {
    return this.signupForm.controls;
  }

  MustMatch(password: any, confirmPassword: any) {

    return (formGroup: FormGroup) => {

      const passwordcontrol = formGroup.controls[password];
      const confirmpasswordcontrol = formGroup.controls[confirmPassword];

      if (confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['MustMatch']) {
        return;
      }

      if (passwordcontrol.value != confirmpasswordcontrol.value) {
        confirmpasswordcontrol.setErrors({ MustMatch: true });
      } else {
        confirmpasswordcontrol.setErrors(null);
      }


    };

  }

  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }

    else {
      this.http.post(`${serverpath}/signup`, { firstname: this.firstname, lastname: this.lastname, email: this.email, mobilenumber: this.mobilenumber, dob: this.dob, password: this.password, roleId: this.roleId, username: this.email }).subscribe((response) => {
        alert(JSON.stringify(response));
        if (response) {
          localStorage.setItem("authData", JSON.stringify(response));
          window.location.href = '/';
        }
      })
    }

    alert("Your Signup is Successful! Welcome to ETaTrA 😊");
    this._router.navigate(['login']);
  }





  ngOnInit(): void {
  }

}
