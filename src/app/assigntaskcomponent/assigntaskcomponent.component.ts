import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import serverpath from"../../baseservice"


/**
 * @title Basic grid-list
 */

export class matGridList{}





/**
 * @title List with selection
 */

export class MatSelectionList {
  }

  export class DividerOverviewExample {}
@Component({
  selector: 'app-assigntaskcomponent',
  templateUrl: './assigntaskcomponent.component.html',
  styleUrls: ['./assigntaskcomponent.component.scss']
})

export class AssigntaskcomponentComponent implements OnInit {

  tasks : any = [{
    task: "",
  }]
  users : any = [{
    username: "",
  }]
  current_selected: any;
  current_selecteduser: any;
  // typesOfTasks : string[] = 
  // ['Dashboard Design Implementation',
  //  'Create a Web Application Design',
  //   'Application Implementation',
  //    'Interactive Design',
  //     'Create a userflow'];
  //     teamMembers : string[] = 
  // ['Renee Beckle',
  //  'Elaine Dorsey',
  //   'Lily,Dodds',
  //    'Helen Foley',
  //     'Jessica Brooks'];
  constructor(private http: HttpClient,private UsersService: UsersService) { }

  ngOnInit(): void {
    this.http.get(`${serverpath}/tasks`).subscribe((data) => {
      this.tasks = JSON.parse(JSON.stringify(data));
      console.log(this.tasks)
    })
    this.http.get(`${serverpath}/users`).subscribe((data) => {
      this.users = JSON.parse(JSON.stringify(data));
      console.log(this.users)
    })
  }
  
  onSelection(e:any, v:any){
    console.log(e.option.selected,v); 
    this.current_selected = e.option.value;
    console.log(this.current_selected)
   }
   onuserSelection(e:any, v:any){
    console.log(e.option.selected,v); 
    console.log(e.option.value); 
    this.current_selecteduser = e.option.value;
    console.log(this.current_selecteduser)
   }
  onSubmit()
  {
    this.UsersService.assigntask(this.current_selected._id,this.current_selecteduser._id);
    alert("task assigned successfully");
  }

}



