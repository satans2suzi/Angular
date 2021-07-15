import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {CreateProductComponent} from "./create-product/create-product.component";
import {ViewProductComponent} from "./view-product/view-product.component";
import {ViewAllProductComponent} from "./view-all-product/view-all-product.component";
import {ViewAllProductByCategoryComponent} from "./view-all-product-by-category/view-all-product-by-category.component";
import {ViewAllProductByDateComponent} from "./view-all-product-by-date/view-all-product-by-date.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'search', component: ViewAllProductByCategoryComponent },
  { path: 'search-date', component: ViewAllProductByDateComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },

  // { path: 'create-product', component: CreateProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
