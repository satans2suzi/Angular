import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';
import {map, take, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAuthState} from '../../../app-store/auth/auth.state';
import {sortBy} from 'admin-lte/plugins/filterizr/utils';
import * as AuthActions from '../../../app-store/auth/auth.action';
import {isAuthenticatedSelector} from '../../../app-store/auth/auth.selector';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly _router: Router,
              private readonly _store: Store<IAuthState>) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._store.select(isAuthenticatedSelector)
      .pipe(
        take(1),
        tap( (value) => value ? true : this._router.navigate(['login']) )
      )
    ;

  }

}
