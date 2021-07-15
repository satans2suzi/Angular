import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ListOrdersComponent} from './projectTA/orders/list-orders/list-orders.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./projectTA/products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', component: ListOrdersComponent}
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
