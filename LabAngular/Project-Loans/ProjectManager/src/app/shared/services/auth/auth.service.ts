import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment.dev';
import {catchError, delay, map, tap} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {FormRegisterModel, ResRegisterModel} from '../../models/auth/register.model';
import {JwtHelperService} from '@auth0/angular-jwt';
import {FormLoginModel, ResLoginModel} from '../../models/auth/login.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private fullName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // isFirstName$: Observable<string> = this.firstName.asObservable();
  loading!: boolean;


  constructor(private httpClient: HttpClient,
              private router: Router,
              private jwtHelperService: JwtHelperService) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  BASE_URL_AUTH = environment.AUTH_BASE_URL;

  register = (data: FormRegisterModel): Observable<ResRegisterModel> => {
    const url = this.BASE_URL_AUTH + environment.AUTH.REGISTER;
    return this.httpClient.post<ResRegisterModel>(url, data, this.httpOptions)
      .pipe(
        tap((val) => console.log(val)),
        tap(() => this.loading = true),
        delay(3000),
        map(res => {
          if (!res) {
            throwError('Lỗi xác thực')
              .pipe(catchError(err => {
                console.error(err);
                return of(err);
              }));
          }
          return res;
        }),
        tap(() => this.loading = false)
      );
  };

  login = (data: FormLoginModel): Observable<ResLoginModel> => {
    const url = this.BASE_URL_AUTH + environment.AUTH.LOGIN;
    return this.httpClient
      .post<ResLoginModel>(url, data, this.httpOptions)
      .pipe(
        tap((val) => console.log(val)),
        tap(() => this.loading = true),
        delay(1000),
        map(res => {
          if (!res) {
            throwError('Lỗi xác thực')
              .pipe(catchError(err => {
                console.error(err);
                this.loggedIn$.next(false);
                return of(err);
              }));
          }
          localStorage.setItem('token', res.data.accessToken);
          localStorage.setItem('fullname', res.data.fullname);
          this.fullName$.next(res.data.fullname);
          this.loggedIn$.next(true);
          return res;
        }),
        tap(() => this.loading = false)
      );
  };


  logout = (): Observable<boolean> => {
    this.loggedIn$.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    return this.loggedIn$.asObservable();
  };

  isLoggedIn = (): Observable<boolean> => {
    const token = localStorage.getItem('token');
    const expirationDate = this.jwtHelperService.getTokenExpirationDate(token?.toString());
    const isExpired = this.jwtHelperService.isTokenExpired(token?.toString());
    const decode = this.jwtHelperService.decodeToken(token?.toString());
    console.log(decode);
    if (isExpired || !token) {
      this.loggedIn$.next(false);
      return this.loggedIn$.asObservable();
    }
    this.loggedIn$.next(true);
    return this.loggedIn$.asObservable();
  }

  currentFullname = (): Observable<string> => {
    const fullName = localStorage.getItem('fullname');
    if (!fullName){
      this.fullName$.next('Unknown');
      return  this.fullName$.asObservable();
    }
    this.fullName$.next(fullName.toUpperCase());
    return this.fullName$.asObservable();
  }

  checkIfUsernameExists(user_name: string): Observable<boolean> {
    const url = this.BASE_URL_AUTH + environment.AUTH.CHECK_USER;
    return this.httpClient.post<{ data: boolean }>(url, {'username': user_name.toLowerCase()})
      .pipe(
        map(res => res.data),
        delay(1000)
      );
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    const url = this.BASE_URL_AUTH + environment.AUTH.CHECK_EMAIL;
    return this.httpClient.post<{ data: boolean }>(url, {'email': email})
      .pipe(
        map(res => res.data),
        delay(1000)
      );
  }
}
