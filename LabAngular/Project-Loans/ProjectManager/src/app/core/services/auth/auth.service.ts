import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment.dev';
import {catchError, map, pluck} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {ResSignInModel, SignInModel} from '../../models/auth/signin.model';
import {ErrorModel} from '../../models/error/errors.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private firstname: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private lastname: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  signIn$ = (data: SignInModel): Observable<ResSignInModel> => {
    const url = environment.AUTH_BASE_URL + environment.AUTH.LOGIN;
    return this.httpClient
      .post<ResSignInModel>(url, data, this.httpOptions)
      .pipe(
        map(res => {
          if (!res) {
            throwError('401')
              .pipe(catchError(err => {
                console.log(this.loggedIn);
                this.loggedIn.next(false);
                return of(err);
              }));
          }
          console.log(this.loggedIn);
          this.loggedIn.next(true);
          return res;
        })
      );

  };
}
