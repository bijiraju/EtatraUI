import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import serverpath from"../baseservice"
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = {
    projectname: '',
    clientname: '',
    email: '',
    country: '',
    state: '',
    zipcode: '',
    phone: '',
    startdate: '',
    enddate: '',
    duration: ''
  };

  constructor(private http: HttpClient) { }

  getProject() {
    return this.http.get(`${serverpath}/getprojects`);
  }

  newProject(projects: any) {
    return this.http.post(`${serverpath}/insertprojects`,  projects ).subscribe(data => { console.log(data) })
      // .subscribe(data => {
      //   console.log(data);
      // }
      // )

  }
  deleteProject(id: any) {

    return this.http.delete(`${serverpath}/removeprojects/` + id)

  }
  editProject(project: any) {
    console.log('client update')
    return this.http.put(`${serverpath}/updateprojects`, project)
      .subscribe(data => { console.log(data) })
  }
}


