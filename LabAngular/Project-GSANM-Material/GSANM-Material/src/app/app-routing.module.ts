import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
// import { SendReportComponent } from './main/send-report/send-report.component';
// import { DayReportComponent } from './main/day-report/day-report.component';
import {ListOrdersComponent} from "./CRUDver2/orders/list-orders/list-orders.component";

const routes: Routes = [
  // {
  //   path: 'send-report',
  //   component: SendReportComponent
  // },
  // {
  //   path: 'day-report',
  //   component: DayReportComponent
  // },
  { path: '', loadChildren: () => import('./CRUDver2/products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent}
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
