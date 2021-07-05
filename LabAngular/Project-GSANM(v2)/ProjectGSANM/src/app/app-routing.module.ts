import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {ReportComponent} from './content/report/report.component';
import {SeachReportComponent} from './content/seach-report/seach-report.component';
import {ContentTableDemoComponent} from "./demo/content-table-demo/content-table-demo.component";
import {SendReportDemoComponent} from "./demo/send-report-demo/send-report-demo.component";
import {Table2DemoComponent} from "./demo/table2-demo/table2-demo.component";

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'report',
    children: [
      {
        path: 'addReport',
        component: ReportComponent
      },
      {
        path: "searchReport",
        component: SeachReportComponent
      }]
  },
  { path: 'demo',
    children: [
      {
        path: "demo-table",
        component: ContentTableDemoComponent
      },
      {
        path: "demo-sendReport",
        component: SendReportDemoComponent
      },
      {
        path: "demotable2",
        component: Table2DemoComponent
      }]
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
