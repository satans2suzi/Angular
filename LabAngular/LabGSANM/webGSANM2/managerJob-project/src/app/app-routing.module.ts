import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {NoAccessComponent} from "./no-access/no-access.component";
import {DemoClientHttpComponent} from "./demo-client-http/demo-client-http.component";

const routes: Routes = [
  { path: ' ', component: DemoClientHttpComponent},
  { path: 'admin', component: AdminComponent} ,
  { path: 'login', component: LoginComponent },
  { path: 'no-access', component: NoAccessComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'post', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
