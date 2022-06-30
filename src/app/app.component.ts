import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';


//import { AlertService, AuthenticationService } from '@app/_services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private http:HttpClient)
 {
   this.loadposts();
 }
 loadposts()
 {
  //  this.http.get('http://etatradb.herokuapp.com/user').subscribe((response)=>{
  //    alert(JSON.stringify(response));
  //  })
 }
}
