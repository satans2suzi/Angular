import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services-product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addNewProduct(form): any {
    console.log(form.value);
    let newProduct = {
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      smallDescription: form.value.small_description,
      description: form.value.description,
      rating: form.value.rating,
      price: form.value.price,
      productImg: '',
      isAvailable: form.value.is_available,
      isSale: form.value.is_sale,
      color: form.value.color,
      reviews: form.value.reviews
    };

    console.log(newProduct);

    this.productService.createProduct(newProduct)
      .subscribe(data => {
        console.log(data);
      });
  }
}
