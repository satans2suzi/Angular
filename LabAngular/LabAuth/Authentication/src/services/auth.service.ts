import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }
  login(credentials): any {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials)).map(response => {
        let result = response.json();
        // console.log(response.json())
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;

      });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return new JwtHelper().decodeToken(token);
  }
}
