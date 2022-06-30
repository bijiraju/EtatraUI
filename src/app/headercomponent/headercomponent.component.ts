import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent implements OnChanges,OnInit {
  authData:any=""
  roleId=0;
  constructor() { 
    this.roleId=0;
   }
 
  
  ngOnInit(): void {
    this.authData=localStorage.getItem("authData");
    this.roleId=(JSON.parse(this.authData)).response.roleId;
    console.log(this.roleId);
    console.log(this.authData);
  }

  
  ngOnChanges(changes: SimpleChanges) {
    this.authData=localStorage.getItem("authData");
    //console.log(this.authData);
    if ("authData" in changes) {
      // console.log("authData")
    }
}

}
