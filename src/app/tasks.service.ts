import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import serverpath from"../baseservice"

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = {
    projectid : "",
    module : "",
    task : "",
    allottedby :"",
    allottedtime : "",
    createddate :"",
    status : ""
  }


  constructor(private http: HttpClient) { }

  getTasks(id: any) {
    return this.http.get(`${serverpath}/tasks` + id);
  }

  editTasks(tasks: any){
    console.log('client update')
    return this.http.put(`${serverpath}/updatetask`, tasks)
      .subscribe(data => { console.log(data) })
  }
  insertTasks(tasks: any){
    console.log('client update')
    return this.http.post(`${serverpath}/inserttasks`, tasks)
      .subscribe(data => { console.log(data) })
  }
  deletetasks(id: any){
    console.log(id);
    return this.http.delete(`${serverpath}/removetasks/` + id)
  }

}
