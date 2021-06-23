import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }
  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials)).map(response => {
        console.log(response);
      });
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }

}
