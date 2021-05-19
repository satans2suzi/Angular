import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {
    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
