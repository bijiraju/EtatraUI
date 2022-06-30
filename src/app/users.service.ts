import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import serverpath from"../baseservice"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = {
    username : "",
    firstname : "",
    lastname : "",
    email : "",
    mobilenumber : "",
    dob : "",
    password : "",
    roleId : ""
  }


  constructor(private http: HttpClient) { }

  getUser(id: any) {
    return this.http.get(`${serverpath}/` + id);
  }

  editUser(user: any){
    console.log('client update')
    return this.http.put(`${serverpath}/update`, user)
      .subscribe(data => { console.log(data) })
  }

  deleteUser(id: any){
    return this.http.delete(`${serverpath}/remove/` + id)
  }

  assigntask(taskid:any,userid:any)
  {
    return this.http.post(`${serverpath}/assigntask`, { userid:userid,taskid:taskid }).subscribe(data => { console.log(data) })
    
  }
}
