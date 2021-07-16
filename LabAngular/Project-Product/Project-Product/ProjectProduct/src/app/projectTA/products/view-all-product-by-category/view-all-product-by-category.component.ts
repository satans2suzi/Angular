import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services-product/product.service';
import {Product} from '../../interface/product';
import {Category} from '../../interface/category';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
  searchCategory: Category;
  productList: Product;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(data => {
        this.searchCategory = data.id;
        this.productService.searchCategoryProducts(this.searchCategory)
          .subscribe(categoryData => {
            console.log(categoryData);
            this.productList = categoryData;
          });
      });
  }

}
