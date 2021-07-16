import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../interface/product';
import {Category} from '../../interface/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASEURL_PRODUCTS = 'http://localhost:3000/products';
  private BASEURL_CATEGORIES = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) {
  }

  // Lấy thông tin của Product
  getAllProduct(): Observable<Product> {
    return this.httpClient.get<Product>(this.BASEURL_PRODUCTS);
  }

  createProduct(productBody: any): Observable<Product> {
    return this.httpClient.post<Product>(this.BASEURL_PRODUCTS, productBody);
  }


  viewProduct(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.BASEURL_PRODUCTS + '?productId=' + productId);
  }

  updateProduct(productId: number, productBody: any): Observable<Product> {
    return this.httpClient.put<Product>(this.BASEURL_PRODUCTS + productId, productBody);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.BASEURL_PRODUCTS + productId);
  }

  searchCategoryProducts(categoryId: any): Observable<Product> {
    return this.httpClient.get<Product>(this.BASEURL_PRODUCTS + '?categoryId=' + categoryId);
  }

  searchDateProducts(dateParam: any): Observable<Product> {
    return this.httpClient.get<Product>(this.BASEURL_PRODUCTS + '?date=' + dateParam);
  }


//  Lấy thông tin Categories
  getCategories(): Observable<Category> {
    // const BASEURL_CATEGORIES = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(this.BASEURL_CATEGORIES);
  }
}
