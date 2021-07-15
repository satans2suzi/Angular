import { Component, OnInit } from '@angular/core';
import {Category} from "../../interface/category";
import { ProductService } from "../../products/service-product/product.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private productService: ProductService,
              private categoryList: Category) { }

  ngOnInit(): void {
    this.productService.getCategories()
      .subscribe( data =>{
        this.categoryList = data;
      });
  }

}
