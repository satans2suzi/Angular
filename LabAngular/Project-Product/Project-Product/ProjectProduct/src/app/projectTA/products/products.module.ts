import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllProductComponent,
    ViewAllProductByCategoryComponent,
    ViewAllProductByDateComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductsModule { }
