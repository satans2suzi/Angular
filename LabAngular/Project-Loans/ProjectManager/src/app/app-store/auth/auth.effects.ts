import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {createEffect, ofType, Actions, Effect, concatLatestFrom} from '@ngrx/effects';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Observable, of} from 'rxjs';
import {catchError, concatMap, delay, exhaust, exhaustMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAuthState} from './auth.state';
import {actionAuthLogin} from './auth.action';
import {AuthActions} from './index-auth.store';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class AuthEffects {
  constructor(private readonly _actions$: Actions,
              private readonly _authService: AuthService,
              private readonly _router: Router,
              private readonly _store: Store<IAuthState>,
              private _spinner: NgxSpinnerService) {
  }

  login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.actionAuthLogin),
      tap(() => this._spinner.show()),
      switchMap(payload => this._authService.login(payload.payload).pipe(
        delay(1000),
        concatMap((user => [AuthActions.actionAuthLoginSuccess({users: user.data}), AuthActions.actionCheckToken()])),
        catchError(err => of(AuthActions.actionAuthLoginFailure({error: err})))
      )),
      tap(() => this._spinner.hide()),
    )
  );

  loginSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.actionAuthLoginSuccess),
      tap(() => this._router.navigate(['/']))
    ), {dispatch: false}
  );

  loginFailure$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.actionAuthLoginFailure),
      tap((val) => alert(val.error['error'].message.name))
    ), {dispatch: false}
  );

  logout$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.actionAuthLogout),
        tap(() => this._spinner.show()),
        delay(300),
        map(() => AuthActions.actionAuthLogoutSuccess()),
        catchError(() => of(AuthActions.actionAuthLogoutFailure())),
        tap(() => this._spinner.hide()),
      ),
  );

  logoutSuccess$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthActions.actionAuthLogoutSuccess),
        tap(() => {
          localStorage.removeItem('state');
          this._router.navigate(['login']);
          // window.location.reload();
        })
      ), {dispatch: false}
  );

  checkToken$ = createEffect(
    () => this._actions$.pipe(
      ofType(AuthActions.actionCheckToken),
      switchMap(() => this._authService.checkToken()),
      map(val => val
        ? AuthActions.actionCheckTokenSuccess({isAuthenticated: true})
        : AuthActions.actionCheckTokenFailure({isAuthenticated: false})
      ),
      catchError(() => of(AuthActions.actionCheckTokenFailure({isAuthenticated: false})))
    )
  );

  checkTokenSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthActions.actionCheckTokenSuccess),

    ), {dispatch: false}
  );

  register$ = createEffect(
    () => this._actions$.pipe(
      ofType(AuthActions.actionAuthRegister),
      tap(() => this._spinner.show()),
      switchMap(payload => this._authService.register(payload.payload)
        .pipe(
          tap((val) => console.log(val)),
          delay(1000),
          map((() => AuthActions.actionAuthRegisterSuccess())),
          catchError(err => of(AuthActions.actionAuthRegisterFailure({error: err})))
        )
      ),
      tap(() => this._spinner.hide()),
    )
  );

  registerSuccess$ = createEffect(
    () => this._actions$.pipe(
      ofType(AuthActions.actionAuthRegisterSuccess),
      tap(() => this._router.navigate(['login']))
    ), {dispatch: false}
  );

  registerFailure$ = createEffect(
    () => this._actions$.pipe(
      ofType(AuthActions.actionAuthRegisterFailure)
    ), {dispatch: false}
  );
}
