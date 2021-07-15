import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASEURL = "http://localhost:3000/products/"

  constructor(private httpClient: HttpClient) {
  }

  createProduct(productBody: any) {
    return this.httpClient.post(this.BASEURL, productBody);
  }

  viewProduct(productId: number) {
    return this.httpClient.get(this.BASEURL+ productId);
  }

  updateProduct(productId: number, productBody: any) {
    return this.httpClient.put(this.BASEURL+ productId, productBody);
  }

  deleteProduct(productId: number) {
    return this.httpClient.delete(this.BASEURL+ productId);
  }

  searchCategoryProducts(productId: number) {
    return this.httpClient.delete(this.BASEURL+ productId);
  }
}
