import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Auth/home/home.component';
import {AdminComponent} from './Auth/admin/admin.component';
import {NoAccessComponent} from './Auth/no-access/no-access.component';
import {LoginComponent} from './Auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'no-access', component: NoAccessComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
