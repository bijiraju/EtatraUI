import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import serverpath from 'src/baseservice';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent implements OnInit {
  //   title = 'etatra';

  //   username= 'superadmin';
  //   password= 'superadmin';

  // public userVerify():void
  // {
  //   window.location.href = '/';
  //    alert("successful login");
  //   localStorage.setItem("isAdmin","true");
  // }





  constructor(private fb: FormBuilder, private _router: Router, private http: HttpClient) { }
  username = "";
  password = "";
  loginForm = this.fb.group({
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)([\.])([a-z]{2,3})(\.[a-z]{2,3})?$')])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]))
  });

  get f() {
    return this.loginForm.controls;
  }

  onLogin() {

    if (this.loginForm.invalid) {

      return;
    }
    else {
      this.http.post(`${serverpath}/login`, { username: this.username, password: this.password }).subscribe((response) => {
        //alert(JSON.stringify(response));
        if (response) {
          localStorage.setItem("authData", JSON.stringify(response));
          window.location.href = '/';
        }
      })
    }

    // alert("Success!");
    // this._router.navigate(['tasks']);
  }

  ngOnInit(): void {

  }

}
