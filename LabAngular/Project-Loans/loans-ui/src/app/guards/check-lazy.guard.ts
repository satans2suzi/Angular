import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLazyGuard implements CanLoad {
  constructor(private authSevice: AuthService,
    private router: Router) {

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authSevice.isLoggedIn()) {
      return true
    } else {
      this.router.navigate(['/auth/login'])
      return false
    }
  }
}
