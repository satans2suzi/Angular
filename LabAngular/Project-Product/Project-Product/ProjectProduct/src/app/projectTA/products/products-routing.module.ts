import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ViewAllProductComponent} from './view-all-product/view-all-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {ViewAllProductByDateComponent} from './view-all-product-by-date/view-all-product-by-date.component';
import {ViewAllProductByCategoryComponent} from './view-all-product-by-category/view-all-product-by-category.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'category/:id', component: ViewAllProductByCategoryComponent },
  { path: 'search-date', component: ViewAllProductByDateComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule { }
