import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SiteFrameworkModule} from './projectTA/site-framework/site-framework.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './projectTA/products/products.component';
import { ListOrdersComponent } from './projectTA/orders/list-orders/list-orders.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ListOrdersComponent
  ],
  imports: [
    BrowserModule,
    SiteFrameworkModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
