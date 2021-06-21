import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  res : any[]
  constructor(private http: HttpClient) {

  }
  getOrders(){
    return this.http.get('/api/orders').pipe(map(response => response));
  }
}
