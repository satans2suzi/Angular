import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {Headers, RequestOptions} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: Http,
              private authHttp: AuthHttp) {

  }
  getOrders(){
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({headers: headers});
    // return this.http.get('/api/orders')
    //   .map(response => response.json());
    return this.authHttp.get('/api/orders', options)
      .map(response => response.json());
  }
}
