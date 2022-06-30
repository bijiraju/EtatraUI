import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component'
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component'
import {HttpClientModule} from '@angular/common/http';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';


// import { MatAccordion } from '@angular/material/expansion/accordion';
import {MatDialogModule} from '@angular/material/dialog';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { ProjectcomponentComponent } from './projectcomponent/projectcomponent.component';
import { AssigntaskcomponentComponent } from './assigntaskcomponent/assigntaskcomponent.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import { ProjectheaderComponent } from './projectheader/projectheader.component';
import { AddprojectcomponentComponent } from './addprojectcomponent/addprojectcomponent.component';
import { UpdateprojectcomponentComponent } from './updateprojectcomponent/updateprojectcomponent.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupcomponentComponent,
    LogincomponentComponent,
    HeadercomponentComponent,
    HomecomponentComponent,
    TaskcomponentComponent,
    NewTaskDialogComponent,
    EditTaskDialogComponent,
    UsercomponentComponent,
    ProjectcomponentComponent,
    AssigntaskcomponentComponent,
    UserUpdateComponent,
    AdminComponent,
    AdminUpdateComponent,
    AdmincomponentComponent,
    ProjectheaderComponent,
    AddprojectcomponentComponent,
    UpdateprojectcomponentComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
