import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {
projects=[
  {"_id":"","projectname":"","clientname":"","email":"","country":"","state":"","Zipcode":"","phone":"1234567891","startdate":"1-1-2020","enddate":"2-3-2021","duration":"1year"}
]
     
  constructor(@Inject(MAT_DIALOG_DATA) public data : any) {
    this.projects=this.data.projects;
   }

  ngOnInit(): void {
    console.log(this.data)
   //this.projects=this.data.projects;
  }

}
