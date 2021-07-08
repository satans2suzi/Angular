import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { SendReportComponent } from './main/send-report/send-report.component';
import { DayReportComponent } from './main/day-report/day-report.component';

const routes: Routes = [
  {
    path: 'send-report',
    component: SendReportComponent
  },
  {
    path: 'day-report',
    component: DayReportComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
