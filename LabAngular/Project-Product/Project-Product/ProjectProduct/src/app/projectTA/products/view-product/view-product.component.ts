import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services-product/product.service';
import {Product} from '../../interface/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID: number;
  productDetails: Product;
  constructor(private activateRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(data => {
        this.productID = data.id;
      });
    this.productService.viewProduct(this.productID)
      .subscribe(productData => {
        this.productDetails = productData;
        console.log(productData);
      });
  }

}
