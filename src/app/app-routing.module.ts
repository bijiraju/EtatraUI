import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { ProjectcomponentComponent } from './projectcomponent/projectcomponent.component';
import { AssigntaskcomponentComponent } from './assigntaskcomponent/assigntaskcomponent.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import { AddprojectcomponentComponent } from './addprojectcomponent/addprojectcomponent.component';
import { UpdateprojectcomponentComponent } from './updateprojectcomponent/updateprojectcomponent.component';



const routes: Routes = [

  { path: "login", component: LogincomponentComponent },
  { path: "signup", component: SignupcomponentComponent },
  { path: "tasks", component: TaskcomponentComponent },
  { path: "users", component: UsercomponentComponent },
  { path: "projects", component: ProjectcomponentComponent },
  { path: "asstasks", component: AssigntaskcomponentComponent },
  { path: "update-user", component: UserUpdateComponent },
  { path: "admins", component: AdmincomponentComponent },
  { path: "update-admin", component: AdminUpdateComponent },
  { path: "addproject", component: AddprojectcomponentComponent },
  { path: "update", component: UpdateprojectcomponentComponent },
  { path: "tasks", component: TaskcomponentComponent },
  { path: "", component: HomecomponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
