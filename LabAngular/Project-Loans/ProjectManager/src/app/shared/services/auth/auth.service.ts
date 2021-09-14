import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment.dev';
import { delay, map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import { Observable, of,} from 'rxjs';
import {IFormRegisterModel, IResRegisterModel} from '../../models/auth/register.model';
import {JwtHelperService} from '@auth0/angular-jwt';
import {IFormLoginModel, IResLoginModel} from '../../models/auth/login.model';
import {Store} from '@ngrx/store';
import {IAuthState} from '../../../app-store/auth/auth.state';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly isAuthenticated$!: Observable<boolean>;


  constructor(private readonly _httpClient: HttpClient,
              private readonly _router: Router,
              private readonly _jwtHelperService: JwtHelperService,
              private readonly _store: Store<IAuthState>) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  BASE_URL_AUTH = environment.AUTH_BASE_URL;

  register(data: IFormRegisterModel): Observable<IResRegisterModel> {
    const url = this.BASE_URL_AUTH + environment.AUTH.REGISTER;
    return this._httpClient.post<IResRegisterModel>(url, data, this.httpOptions);
  }

  login(data: IFormLoginModel): Observable<IResLoginModel> {
    const url = this.BASE_URL_AUTH + environment.AUTH.LOGIN;
    return this._httpClient.post<IResLoginModel>(url, data, this.httpOptions);
  }

  checkToken(): Observable<boolean> {
    const state = localStorage.getItem('state');
    if (state != null) {
      let obj = JSON.parse(state);
      // const expirationDate = this.jwtHelperService.getTokenExpirationDate(token?.toString());
      const isExpired = this._jwtHelperService.isTokenExpired(obj.feature_auth.accessToken);
      if (isExpired) {
        return of(false);
      }
      return of(true);
    }
    return of(false);
  }

  checkIfUsernameExists(user_name: string): Observable<boolean> {
    const url = this.BASE_URL_AUTH + environment.AUTH.CHECK_USER;
    return this._httpClient.post<{ data: boolean }>(url, {'username': user_name.toLowerCase()})
      .pipe(
        map(res => res.data),
        delay(1000)
      );
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    const url = this.BASE_URL_AUTH + environment.AUTH.CHECK_EMAIL;
    return this._httpClient.post<{ data: boolean }>(url, {'email': email})
      .pipe(
        map(res => res.data),
        delay(1000)
      );
  }
}
