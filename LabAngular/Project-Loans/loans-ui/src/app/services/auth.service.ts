import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegisterModel, LoginModel, ResLoginModel, ResRegisterModel } from '../models/auth.model';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { HttpHeaders } from '@angular/common/http';
// import { JwtHelper } from 'angular2-jwt';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = this.isLoggedIn();
  constructor(private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private router: Router) {
  }


  register(data: RegisterModel): Observable<any> {
    const url = environment.AUTH_BASE_URL + environment.AUTH.REGISTER;
    return this.httpClient.post<ResRegisterModel>(url, data)
      .pipe(map(res => {
        if (res && res.message.statusCode === 201) {
          return res
        }
        return false
      }))
  }

  login(data: LoginModel): Observable<any> {
    const url = environment.AUTH_BASE_URL + environment.AUTH.LOGIN;
    return this.httpClient.post<ResLoginModel>(url, data, httpOptions)
      .pipe(map(res => {
        if (res && res.message.statusCode === 200) {
          console.log(res.data.username)
          console.log(res.data.role)
          console.log(res.message.name)
          localStorage.setItem('token', res.accessToken)
          return res
        } else {
          return false
        }
      }))
  }

  logout(): any {
    // this.cookieService.delete('jwt_ac', '/')
    // this.cookieService.delete('jwt_rf', '/')
    localStorage.removeItem('token')
    return this.router.navigate(['/auth/login']).then(() => {
      window.location.reload();
    });
  }

  isLoggedIn(): boolean {
    // return tokenNotExpired()
    let token = localStorage.getItem('token');
    let expirationDate = this.jwtHelperService.getTokenExpirationDate(token?.toString());
    let isExpired = this.jwtHelperService.isTokenExpired(token?.toString());
    if (!token) {
      return false
    } else if (isExpired === true) {
      localStorage.removeItem('token')
      return false
    } else {
      console.log('expirationDate', expirationDate)
      console.log('isExpired', isExpired)
      return !isExpired
    }

  }

  refreshLogin(): any {

  }

}
